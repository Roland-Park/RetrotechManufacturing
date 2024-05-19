namespace RetrotechManufacturing.Api.BLL.Services.Interfaces;

public interface IBaseDataDeserializerService<T>
{
    List<T> DeserializeData();
    List<T> DeserializeDataById(long[] ids);
}
