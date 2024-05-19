using RetrotechManufacturing.Api.BLL.Services.Interfaces;
using RetrotechManufacturing.Api.Domain.Prices;
using RetrotechManufacturing.Api.Domain.ProductGroups;
using RetrotechManufacturing.Api.Domain.Products;

namespace RetrotechManufacturing.Api.BLL.Services;
public class DeserializationOrchestrator : IDeserializationOrchestrator
{
    private readonly ICategoryDeserializerService categoryDeserializer;
    private readonly IVehicleDeserializerService vehicleDeserializer;
    private readonly IProductDeserializerService productDeserializer;
    private readonly IProductGroupDeserializerService productGroupDeserializer;
    private readonly IPriceDeserializerService priceDeserializer;
    private readonly IDimensionDeserializerService dimensionDeserializer;
    private readonly IPictureDeserializerService pictureDeserializer;
    public DeserializationOrchestrator(
        ICategoryDeserializerService categoryDeserializerService, 
        IVehicleDeserializerService vehicleDeserializer, 
        IProductDeserializerService productDeserializer, 
        IProductGroupDeserializerService productGroupDeserializer, 
        IPriceDeserializerService priceDeserializer, 
        IDimensionDeserializerService dimensionDeserializer, 
        IPictureDeserializerService pictureDeserializer)
    {
        this.categoryDeserializer = categoryDeserializerService;
        this.vehicleDeserializer = vehicleDeserializer;
        this.productDeserializer = productDeserializer;
        this.productGroupDeserializer = productGroupDeserializer;
        this.priceDeserializer = priceDeserializer;
        this.dimensionDeserializer = dimensionDeserializer;
        this.pictureDeserializer = pictureDeserializer;
    }

    public List<Category> GetCategories(bool includeProducts = false)
    {
        var categories = categoryDeserializer.DeserializeData();
        if (!includeProducts) return categories;

        var products = productDeserializer.DeserializeData();
        foreach(var category in categories)
        {
            category.Products = GetProductsById(category.ProductIds);
        }

        return categories;
    }

    public List<Vehicle> GetVehicles(bool includeVehicles = false) 
    {
        throw new NotImplementedException();
    }

    public List<Price> GetPricesForCategories(long[] categoryIds)
    {
        throw new NotImplementedException();
        //var categories = GetCategories(includeProducts: true);
    }

    public List<Vehicle> GetPricesForVehicles(long[] vehicleIds)
    {
        throw new NotImplementedException();
    }

    private List<Product> GetProductsById(long[] productIds)
    {
        var allProducts = productDeserializer.DeserializeData();
        var allProductGroups = productGroupDeserializer.DeserializeData();

        var result = new List<Product>();
        foreach (var productId in productIds)
        {
            var productToAdd = allProducts.FirstOrDefault(x => x.Id == productId);
            if (productToAdd == null) throw new Exception($"Product {productId} does not exist.");

            var productGroupToAdd = allProductGroups.FirstOrDefault(x => x.Id == productToAdd.ProductGroupId);
            if (productGroupToAdd == null) throw new Exception($"ProductGroup {productToAdd.ProductGroupId} does not exist.");

            productToAdd.ProductGroup = productGroupToAdd;

            result.Add(productToAdd);
        }

        return result;
    }
}
