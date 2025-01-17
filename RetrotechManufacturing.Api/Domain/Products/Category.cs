﻿using RetrotechManufacturing.Api.Domain.Base;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetrotechManufacturing.Api.Domain.Products;
[Table("Categories")]
public class Category : Entity
{
    public string Name { get; set; }
    public virtual IEnumerable<Product> Products { get; set; }
    /// <summary>
    /// required for json serialization, not EF
    /// </summary>
    public long[] ProductIds { get; set; }
}
