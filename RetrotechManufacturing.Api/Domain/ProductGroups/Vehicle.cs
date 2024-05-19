using RetrotechManufacturing.Api.Domain.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetrotechManufacturing.Api.Domain.ProductGroups;
[Table("Vehicles")]
public class Vehicle : Entity
{
    public string Make { get; set; }
    public string Model { get; set; }
    public string Year { get; set; }
    public virtual IEnumerable<ProductGroup> ProductGroups { get; set; }
    public string Name => $"{Year} {Make} {Model}";
}
