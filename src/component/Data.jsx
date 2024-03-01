import { useLocation } from "react-router-dom";

const Data = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  return (
    <div>
      <h2>Data yang Diterima:</h2>
      {formData ? (
        <>
          <p>Nama: {formData.nama}</p>
          <p>Email: {formData.email}</p>
          <p>Nomor Telepon: {formData.phoneNumber}</p>
          <p>Alamat: {formData.address}</p>
          <p>Kode Pos: {formData.postCode}</p>
          <p>Pesan: {formData.message}</p>
        </>
      ) : (
        <p>Tidak ada data yang diterima.</p>
      )}
    </div>
  );
};

export default Data;
