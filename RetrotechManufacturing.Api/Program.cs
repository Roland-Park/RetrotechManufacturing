using Microsoft.Extensions.FileProviders;
using RetrotechManufacturing.Api.BLL.Services;
using RetrotechManufacturing.Api.BLL.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddTransient<ICategoryDeserializerService, CategoryDeserializerService>();
builder.Services.AddTransient<IVehicleDeserializerService, VehicleDeserializerService>();
builder.Services.AddTransient<IProductDeserializerService, ProductDeserializerService>();
builder.Services.AddTransient<IProductGroupDeserializerService, ProductGroupDeserializerService>();
builder.Services.AddTransient<IPriceDeserializerService, PriceDeserializerService>();
builder.Services.AddTransient<IDimensionDeserializerService, DimensionDeserializerService>();
builder.Services.AddTransient<IPictureDeserializerService, PictureDeserializerService>();
builder.Services.AddTransient<IDeserializationOrchestrator, DeserializationOrchestrator>();
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "CorsPolicy",
        x => x.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod());
});

var app = builder.Build();

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseStaticFiles( new StaticFileOptions()
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(
            Directory.GetCurrentDirectory(), 
            "staticfiles"))
    , RequestPath = "/staticfiles"
});

app.UseAuthorization();

app.MapControllers();
app.MapFallbackToController("Index", "Fallback");

app.UseCors("CorsPolicy");

app.Run();
