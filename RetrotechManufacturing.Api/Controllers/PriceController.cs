using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RetrotechManufacturing.Api.BLL.Services.Interfaces;
using RetrotechManufacturing.Api.Domain.Prices;
using RetrotechManufacturing.Api.Domain.ProductGroups;
using RetrotechManufacturing.Api.Domain.Products;

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

    [HttpGet("category/{categoryId}")]
    public ActionResult<List<Price>> GetPricesForCategory(long categoryId)
    {
        var categories = deserializer.GetCategories(includeProducts: true);

        return Ok();
    }
}
