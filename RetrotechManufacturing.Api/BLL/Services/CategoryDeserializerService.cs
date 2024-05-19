using RetrotechManufacturing.Api.BLL.Services.Interfaces;
using RetrotechManufacturing.Api.Domain.Products;

namespace RetrotechManufacturing.Api.BLL.Services;
public class CategoryDeserializerService : BaseDataDeserializerService<Category>, ICategoryDeserializerService
{
    private readonly IConfiguration config;
    public CategoryDeserializerService(IConfiguration config) : base(config){}
}
