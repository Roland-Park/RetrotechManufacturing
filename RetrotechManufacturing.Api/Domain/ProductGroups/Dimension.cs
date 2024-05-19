using RetrotechManufacturing.Api.Domain.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetrotechManufacturing.Api.Domain.ProductGroups;
/// <summary>
/// distances in cm, weight in kg
/// dimensions attached to a packed box or product have a weight, 
/// but an empty box has a weight of 0
/// </summary>
[Table("Dimensions")]
public class Dimension : Entity
{
    [Column(TypeName = "decimal(18,4)")]
    public double Height { get; set; }
    [Column(TypeName = "decimal(18,4)")]
    public double Length { get; set; }
    [Column(TypeName = "decimal(18,4)")]
    public double Width { get; set; }
    [Column(TypeName = "decimal(18,4)")]
    public double Weight { get; set; }
}
