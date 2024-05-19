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

        foreach(var category in categories)
        {
            if (category.ProductIds == null || !category.ProductIds.Any()) continue;
            category.Products = GetProductsById(category.ProductIds);
        }

        return categories;
    }

    public List<Vehicle> GetVehicles(bool includeProductGroups = false) 
    {
        var vehicles = vehicleDeserializer.DeserializeData();
        if(!includeProductGroups) return vehicles;

        foreach (var vehicle in vehicles)
        {
            if (vehicle.ProductGroupIds == null || !vehicle.ProductGroupIds.Any()) continue;
            vehicle.ProductGroups = GetProductGroupsById(vehicle.ProductGroupIds);
        }

        return vehicles;
    }

    public List<Price> GetPricesForCategories(long[] categoryIds)
    {
        throw new NotImplementedException();
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
            var productToAdd = GetProductFromList(allProducts, productId);
            productToAdd.ProductGroup = GetProductGroupFromList(allProductGroups, productToAdd.ProductGroupId);

            result.Add(productToAdd);
        }

        return result;
    }

    private IEnumerable<ProductGroup> GetProductGroupsById(long[] productGroupIds)
    {
        var allProducts = productDeserializer.DeserializeData();
        var allProductGroups = productGroupDeserializer.DeserializeData();

        var result = new List<ProductGroup>();
        foreach(var productGroupId in productGroupIds)
        {
            var productGroupToAdd = GetProductGroupFromList(allProductGroups, productGroupId);
            productGroupToAdd.Products = GetProductsFromList(allProducts, productGroupToAdd.ProductIds);
            result.Add(productGroupToAdd);
        }

        return result;
    }

    private ProductGroup GetProductGroupFromList(List<ProductGroup> allProductGroups, long productGroupId)
    {
        var allDimensions = dimensionDeserializer.DeserializeData();
        var result = allProductGroups.FirstOrDefault(x => x.Id == productGroupId);
        if (result == null) throw new Exception($"ProductGroup {productGroupId} does not exist.");

        result.Products = new List<Product>();
        result.Dimensions = allDimensions.FirstOrDefault(x => x.Id == result.DimensionId);

        return result;
    }

    private Product GetProductFromList(List<Product> allProducts, long productId)
    {
        var allPrices = priceDeserializer.DeserializeData();

        var result = allProducts.FirstOrDefault(x => x.Id == productId);
        if (result == null) throw new Exception($"ProductGroup {productId} does not exist.");

        result.Prices = allPrices.Where(x => x.ProductId == result.Id);

        return result;
    }

    private List<Product> GetProductsFromList(List<Product> allProducts, long[] productIds)
    {
        var result = new List<Product>();
        foreach (var productId in productIds)
        {
            result.Add(GetProductFromList(allProducts, productId));
        }
        return result;
    }
}
