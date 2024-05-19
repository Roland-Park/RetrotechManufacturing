using RetrotechManufacturing.Api.BLL.Services.Interfaces;
using RetrotechManufacturing.Api.Domain.ProductGroups;

namespace RetrotechManufacturing.Api.BLL.Services;
public class ProductGroupDeserializerService : BaseDataDeserializerService<ProductGroup>, IProductGroupDeserializerService
{
    private readonly IConfiguration config;
    public ProductGroupDeserializerService(IConfiguration config) : base(config){}
}
