using RetrotechManufacturing.Api.BLL.Services.Interfaces;
using RetrotechManufacturing.Api.Domain.Products;

namespace RetrotechManufacturing.Api.BLL.Services;
public class ProductDeserializerService : BaseDataDeserializerService<Product>, IProductDeserializerService
{
    private readonly IConfiguration config;
    public ProductDeserializerService(IConfiguration config) : base(config){}
}
