import axios from "axios";

export async function uploadImage(file) {
  const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
  const expirationSeconds = 30 * 24 * 60 * 60;
  const url = `https://api.imgbb.com/1/upload?expiration=${expirationSeconds}&key=${apiKey}`;

  const fileInBase64 = await fileToBase64(file);

  const formData = new FormData();
  formData.append("image", fileInBase64.split(",")[1]);

  const picture = await axios
    .post(url, formData, {})
    .then((response) => response.data);
  return picture.data.url;
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
