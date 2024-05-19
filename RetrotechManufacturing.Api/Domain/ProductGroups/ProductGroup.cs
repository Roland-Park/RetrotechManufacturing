﻿using RetrotechManufacturing.Api.Domain.Base;
using RetrotechManufacturing.Api.Domain.Products;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetrotechManufacturing.Api.Domain.ProductGroups;
[Table("ProductGroups")]
public class ProductGroup : Entity
{
    public string Name { get; set; }
    public bool IsShippable { get; set; }
    public Dimension? Dimensions { get; set; }
    public long? DimensionsId { get; set; }
    public virtual IEnumerable<Product> Products { get; set; }
    public virtual IEnumerable<Vehicle> Vehicles { get; set; }
}
