using RetrotechManufacturing.Api.BLL.Services.Interfaces;
using RetrotechManufacturing.Api.Domain.Prices;

namespace RetrotechManufacturing.Api.BLL.Services;
public class PriceDeserializerService : BaseDataDeserializerService<Price>, IPriceDeserializerService
{
    private readonly IConfiguration config;
    public PriceDeserializerService(IConfiguration config) : base(config){}
}
