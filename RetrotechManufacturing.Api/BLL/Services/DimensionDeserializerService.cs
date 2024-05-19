using RetrotechManufacturing.Api.BLL.Services.Interfaces;
using RetrotechManufacturing.Api.Domain.ProductGroups;

namespace RetrotechManufacturing.Api.BLL.Services;
public class DimensionDeserializerService : BaseDataDeserializerService<Dimension>, IDimensionDeserializerService
{
    private readonly IConfiguration config;
    public DimensionDeserializerService(IConfiguration config) : base(config){}
}
