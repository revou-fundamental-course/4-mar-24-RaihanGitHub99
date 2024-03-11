import FatMan from '../assets/fat_man.jpg';
import NormalMan from '../assets/skinny_guy.jpg'
import UnderWeightMan from '../assets/undereight_man.jpg'

export const textData = {
    header : {
        text: "Berat badan ideal adalah impian semua orang. Tidak hanya memiliki bentuk tubuh yang menunjang penampilan, berat badan ideal juga menandakan kondisi tubuh yang sehat. Bagaimana denganmu? Yuk, hitung sekarang di kalkulator BMI."
    },
    BMI: {
        SeverelyUnderweight : {
            text : "Jika BMI Anda termasuk kategori Severely Underweight, segera konsultasikan kondisi kesehatan dengan dokter. Perbaiki pola makan dengan asupan gizi seimbang dan porsi yang cukup. Lakukan olahraga ringan secara teratur untuk menjaga kebugaran. Jaga juga kesehatan mental dan manajemen stres. Dengan menjalankan pola hidup sehat secara konsisten, berat badan akan meningkat secara bertahap dan aman.",
            image : UnderWeightMan
        },
        Underweight : {
            text : "Jika BMI Anda termasuk kategori Underweight, perbaiki pola makan dengan mengonsumsi makanan bergizi seimbang dan tinggi kalori secara rutin. Tambahkan porsi makanan secara bertahap. Lakukan olahraga ringan hingga sedang untuk menjaga otot dan tulang tetap kuat. Kelola stres dengan baik dan istirahat yang cukup. Pantau berat badan secara berkala hingga mencapai kisaran yang sehat.",
            image : UnderWeightMan
        },
        NormalWeight : {
            text : "Jika BMI Anda termasuk kategori Normal Weight, pertahankan pola hidup sehat dengan menjaga keseimbangan asupan gizi dan olahraga teratur. Konsumsi makanan yang bervariasi dan bergizi seimbang. Tetap aktif secara fisik minimal 30 menit per hari. Kelola stres dengan baik, tidur yang cukup, dan hindari kebiasaan buruk. Lakukan pemeriksaan kesehatan rutin untuk memantau kondisi tubuh.",
            image : NormalMan
        },
        OverWeight : {
            text : "Jika BMI Anda termasuk kategori Overweight, mulailah mengatur pola makan dengan mengurangi asupan kalori dan memperbanyak serat. Pilih makanan yang sehat dan batasi makanan tinggi lemak dan gula. Tingkatkan aktivitas fisik secara bertahap, target minimal 150 menit per minggu. Kelola stres dengan baik dan cukup istirahat. Pantau berat badan dan ukur lingkar pinggang secara teratur untuk melihat progres.",
            image : NormalMan
        },
        ObessityClassI : {
            text : "Jika BMI Anda termasuk kategori Obesity Class I, segera konsultasikan dengan dokter untuk mendapatkan penanganan yang tepat. Ubah pola makan dengan mengurangi asupan kalori, lemak, dan gula. Perbanyak konsumsi serat, buah, dan sayuran. Tingkatkan aktivitas fisik secara bertahap hingga 150-300 menit per minggu. Kelola stres dan perbaiki kualitas tidur. Pantau berat badan dan indikator kesehatan lainnya secara teratur.",
            image : FatMan
        },
        ObessityClassII : {
            text : "Jika BMI Anda termasuk kategori Obesity Class II, segera konsultasikan dengan dokter untuk mendapatkan penanganan komprehensif. Ikuti program penurunan berat badan yang disarankan oleh profesional kesehatan. Ubah pola makan dengan mengurangi asupan kalori secara signifikan dan pilih makanan rendah lemak dan gula. Tingkatkan aktivitas fisik secara bertahap sesuai kemampuan, target 150-300 menit per minggu. Kelola stres, perbaiki kualitas tidur, dan cari dukungan dari orang terdekat.",
            image : FatMan
        },
        ObessityClassIII : {
            text : "Jika BMI Anda termasuk kategori Obesity Class III, segera cari penanganan medis komprehensif dari dokter spesialis. Ikuti program penurunan berat badan yang intensif dan terpantau ketat oleh profesional kesehatan. Ubah pola makan dengan pengurangan kalori yang signifikan dan pilihan makanan rendah lemak dan gula. Tingkatkan aktivitas fisik secara bertahap sesuai kemampuan dan petunjuk dokter. Kelola stres, atasi masalah tidur, dan dapatkan dukungan psikologis jika diperlukan. Pantau indikator kesehatan secara teratur dan patuhi rekomendasi dokter.",
            image : FatMan
        }
    } 
}