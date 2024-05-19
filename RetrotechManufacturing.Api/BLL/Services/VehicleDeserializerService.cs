using RetrotechManufacturing.Api.BLL.Services.Interfaces;
using RetrotechManufacturing.Api.Domain.ProductGroups;

namespace RetrotechManufacturing.Api.BLL.Services;
public class VehicleDeserializerService : BaseDataDeserializerService<Vehicle>, IVehicleDeserializerService
{
    private readonly IConfiguration config;
    public VehicleDeserializerService(IConfiguration config) : base(config){}
}
