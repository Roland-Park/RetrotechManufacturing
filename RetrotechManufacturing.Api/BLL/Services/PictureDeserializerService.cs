using RetrotechManufacturing.Api.BLL.Services.Interfaces;
using RetrotechManufacturing.Api.Domain.ProductGroups;

namespace RetrotechManufacturing.Api.BLL.Services;
public class PictureDeserializerService : BaseDataDeserializerService<Picture>, IPictureDeserializerService
{
    private readonly IConfiguration config;
    public PictureDeserializerService(IConfiguration config) : base(config){}
}
