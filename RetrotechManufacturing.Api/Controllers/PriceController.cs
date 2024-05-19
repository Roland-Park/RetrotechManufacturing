using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RetrotechManufacturing.Api.Domain.Prices;
using RetrotechManufacturing.Api.Domain.ProductGroups;
using RetrotechManufacturing.Api.Domain.Products;

namespace RetrotechManufacturing.Api.Controllers;

[Route("[controller]")]
[ApiController]
public class PriceController : ControllerBase
{
    private IConfiguration config;
    private const string priceSection = "Data:Prices";
    private const string categorySection = "Data:Categories";
    private const string ProductSection = "Data:Products";
    private const string ProductGroupSection = "Data:ProductGroups";
    public PriceController(IConfiguration config)
    {
        this.config = config;
    }

    [HttpGet("category/{categoryId}")]
    public ActionResult<List<Price>> GetPricesForCategory(long categoryId)
    {
        var categories = config.GetSection(categorySection).Get<List<Category>>();
        var prices = config.GetSection(priceSection).Get<List<Price>>();
        var products = config.GetSection(ProductSection).Get<List<Product>>();
        var productGroups = config.GetSection(ProductGroupSection).Get<List<ProductGroup>>();

        var category = categories.FirstOrDefault(x => x.Id == categoryId);

        return Ok(prices);
    }
}
