using RetrotechManufacturing.Api.Domain.Prices;
using RetrotechManufacturing.Api.Domain.ProductGroups;
using RetrotechManufacturing.Api.Domain.Products;

namespace RetrotechManufacturing.Api.BLL.Services.Interfaces;

public interface IDeserializationOrchestrator
{
    List<Category> GetCategories(bool includeProducts = false);
    List<Vehicle> GetVehicles(bool includeProductGroups = false);
    List<Price> GetPrices();
}
