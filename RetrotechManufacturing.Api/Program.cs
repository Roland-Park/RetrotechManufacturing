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

var app = builder.Build();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
