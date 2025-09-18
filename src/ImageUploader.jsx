import { useState } from "react";

function ImageUploader() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Validar que sea una imagen
    if (!file.type.startsWith("image/")) {
      setError("⚠️ El archivo no es una imagen válida");
      setImage(null);
      return;
    }

    setError("");
    setImage(URL.createObjectURL(file));
  };

return (
  <div style={{
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "2px dashed #888",
    borderRadius: "12px",
    textAlign: "center",
    backgroundColor: "#f9f9f9"
  }}>
    <h2 style={{ marginBottom: "20px", color: "#333" }}>Subir Imagen</h2>
    
    <input 
      type="file" 
      accept="image/*" 
      onChange={handleFileChange}
      style={{ margin: "10px 0", cursor: "pointer" }}
    />

    {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

    {image && (
      <div>
        <h3 style={{ marginTop: "20px", color: "#555" }}>Vista previa:</h3>
        <img 
          src={image} 
          alt="preview" 
          style={{ 
            width: "100%", 
            maxWidth: "300px", 
            borderRadius: "10px", 
            marginTop: "10px",
            border: "1px solid #ccc"
          }} 
        />
      </div>
    )}
  </div>
);

}

export default ImageUploader;
