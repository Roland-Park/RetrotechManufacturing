using Microsoft.AspNetCore.Mvc;
using RetrotechManufacturing.Api.BLL.Services.Interfaces;
using RetrotechManufacturing.Api.Domain.Products;

namespace RetrotechManufacturing.Api.Controllers;

[Route("[controller]")]
[ApiController]
public class VehicleController : ControllerBase
{
    private readonly IDeserializationOrchestrator deserializer;
    public VehicleController(IDeserializationOrchestrator deserializer)
    {
        this.deserializer = deserializer;
    }

    [HttpGet]
    public ActionResult<List<Category>> GetVehicles()
    {
        return Ok(deserializer.GetVehicles(includeProductGroups: false));
    }
}
