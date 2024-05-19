using RetrotechManufacturing.Api.BLL.Services.Interfaces;
using RetrotechManufacturing.Api.Domain.Base;

namespace RetrotechManufacturing.Api.BLL.Services;
public abstract class BaseDataDeserializerService<T> : IBaseDataDeserializerService<T> where T : Entity
{
    private readonly string typeName; 
    private const string priceSection = "Data:Prices";
    private const string categorySection = "Data:Categories";
    private const string productSection = "Data:Products";
    private const string productGroupSection = "Data:ProductGroups";
    private const string vehicleSection = "Data:Vehicles";
    private const string pictureSection = "Data:Pictures";
    private const string dimensionSection = "Data:Dimensions";
    private readonly IConfiguration config;
    public BaseDataDeserializerService(IConfiguration config)
    {
        this.config = config;
        typeName = typeof(T).Name;
    }

    public List<T> DeserializeDataById(long[] ids)
    {
        return DeserializeData().Where(x => ids.Contains(x.Id)).ToList();
    }

    public List<T> DeserializeData()
    {
        var appsettingsKey = GetAppsettingsKey();

        var result = config.GetSection(appsettingsKey).Get<List<T>>();

        if (result == null) throw new Exception($"Failed to deserialize {typeName}");
        return result;
    }

    private string GetAppsettingsKey()
    {
        switch (typeName)
        {
            case "Product":
                return productSection;
            case "ProductGroup":
                return productGroupSection;
            case "Category":
                return categorySection;
            case "Price":
                return priceSection;
            case "Vehicle":
                return vehicleSection;
            case "Dimension":
                return dimensionSection;
            case "Picture":
                return pictureSection;
            default:
                throw new Exception($"{typeName} does not have a data section and cannot be deserialized.");
        }
    }
}
