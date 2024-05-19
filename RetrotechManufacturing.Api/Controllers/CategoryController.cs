using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RetrotechManufacturing.Api.BLL.Services.Interfaces;
using RetrotechManufacturing.Api.Domain.Products;

namespace RetrotechManufacturing.Api.Controllers;

[Route("[controller]")]
[ApiController]
public class CategoryController : ControllerBase
{
    private readonly IDeserializationOrchestrator deserializer;
    public CategoryController(IDeserializationOrchestrator deserializer)
    {
        this.deserializer = deserializer;
    }

    [HttpGet]
    public ActionResult<List<Category>> GetCategories()
    {
        return Ok(deserializer.GetCategories(includeProducts: true));
    }
}
