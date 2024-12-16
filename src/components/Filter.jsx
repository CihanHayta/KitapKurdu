import { useSearchParams } from "react-router-dom";


const Filter = () => {

  const [searchParams,SetSearchParams] = useSearchParams()

  const handleSubmit = (e) => {
    // Sayfa yenilemesini engelle
    e.preventDefault();
    // Formun gönderilmesiyle inputtaki değere eriş
    const text = e.target[0].value;

    // url'e  geçilecek parametre ve değeri ayarla
    searchParams.set("search", text);

    // url'e bir arama parametresi geç
    SetSearchParams(searchParams);
  };

  
  const handleChange = (e) => {
    // Select alanındaki değere eriş
    const text = e.target.value;

    // Erişilen bu değer ile url'e parametre geç
    searchParams.set("sort", text);

    // url'i güncelle
    SetSearchParams(searchParams);
  };

 
 
  

  

  return (
    <div className="d-flex justify-content-between align-content-center my-4 gap-3">

      <div>
        <select onChange={handleChange} className="form-select">
          <option value="">Sırala</option>
          <option value="">a-z</option>
          <option value="">z-a</option>
        </select>

      </div>
      <form onSubmit={handleSubmit} className="d-flex gap-2">
        <input type="text" className="form-control" placeholder="Kitap ismi giriniz...i" />
        <button typeof="Submit" className="btn btn-primary">Ara</button>
      </form>
    </div>
  );
}

export default Filter;