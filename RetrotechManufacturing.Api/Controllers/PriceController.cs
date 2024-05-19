using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetrotechManufacturing.Api.BLL.Services.Interfaces;
using RetrotechManufacturing.Api.Domain.Prices;

namespace RetrotechManufacturing.Api.Controllers;

[Route("[controller]")]
[ApiController]
public class PriceController : ControllerBase
{
    private readonly IDeserializationOrchestrator deserializer;
    public PriceController(IDeserializationOrchestrator deserializer)
    {
        this.deserializer = deserializer;
    }

    [HttpGet]
    public ActionResult<List<Price>> GetAll()
    {
        return Ok(deserializer.GetPrices());
    }
}
