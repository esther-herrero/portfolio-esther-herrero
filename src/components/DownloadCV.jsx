//
//
// function DownloadCV() {
//     const downloadImages = () => {
//         const images = [
//             '/assets/CV_front_developer_Esther_Rguez_Herrero_img_1.jpg',
//             '/assets/CV_front_developer_Esther_Rguez_Herrero_img_2.jpg'
//         ];
//
//         images.forEach((imageUrl) => {
//             fetch(imageUrl)
//                 .then((response) => {
//                     if (!response.ok) {
//                         throw new Error(`Error ${response.status}: No se pudo descargar ${imageUrl}`);
//                     }
//                     return response.blob();
//                 })
//                 .then((blob) => {
//                     const link = document.createElement('a');
//                     link.href = URL.createObjectURL(blob);
//                     link.setAttribute('download', imageUrl.split('/').pop());
//                     document.body.appendChild(link);
//                     link.click();
//                     document.body.removeChild(link);
//                 })
//                 .catch((error) => console.error(error.message));
//         });
//     };
//
//     return (
//         <div className="dowland_cv_container">
//             <a
//                 className="dowland_cv"
//                 href="/assets/CV_front_developer_Esther_Rguez_Herrero.pdf"
//                 download="CV_front_developer_Esther_Rguez_Herrero"
//             >
//                 <button type="button" className="btn btn-info btn-descarga">
//                     Descargar CV en PDF
//                 </button>
//             </a>
//
//             <button type="button" className="btn btn-info btn-descarga" onClick={downloadImages}>
//                 Descargar CV en Imágenes
//             </button>
//         </div>
//     );
// }
//
// export default DownloadCV;
