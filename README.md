# ✈ MYK Uçak Bileti Arama Sistemi

Bu proje, MYK Yazılım Geliştirici Seviye 5 proje yönergesine uygun olarak geliştirilmiş bir uçak bileti arama ve takip sistemidir. Kullanıcılar, kalkış-varış şehirlerini ve tarihleri seçerek en uygun fiyatlı uçak biletlerini bulabilirler.

## 🎯 Özellikler

- **Uçuş Arama**: Kalkış, varış şehri ve tarih seçerek uçuş arama
- **Sonuç Listeleme**: Uçuşlar fiyat, saat ve havayolu bilgisiyle listelenir
- **Detaylı Bilgi**: Her uçuş için detaylı bilgileri içeren modal/popup pencere
- **Responsive Tasarım**: Mobil ve masaüstü cihazlarda uyumlu arayüz
- **Mock API**: Geçici sahte API servisi ile veri yönetimi
- **Birim Testleri**: Temel bileşenler için kapsamlı testler

## 🛠 Kullanılan Teknolojiler

- **React** (v18): Kullanıcı arayüzü geliştirme
- **JavaScript (ES6+)**: Modern JavaScript özellikleri
- **CSS3**: Responsive tasarım ve animasyonlar
- **Jest**: Test framework
- **React Testing Library**: Bileşen testleri
- **Create React App**: Proje iskelet yapısı

## 📋 Proje Yapısı

```
myk_frontend/
├── public/                    # Static dosyalar
├── src/
│   ├── components/           # React bileşenleri
│   │   ├── FlightSearchForm.js       # Arama formu bileşeni
│   │   ├── FlightSearchForm.css
│   │   ├── FlightCard.js             # Uçuş kartı bileşeni
│   │   ├── FlightCard.css
│   │   ├── FlightDetailsModal.js     # Detay modal bileşeni
│   │   └── FlightDetailsModal.css
│   ├── services/             # API servisleri
│   │   └── flightService.js          # Mock API servisi
│   ├── __tests__/            # Test dosyaları
│   │   ├── FlightSearchForm.test.js
│   │   ├── FlightCard.test.js
│   │   └── flightService.test.js
│   ├── App.js               # Ana uygulama bileşeni
│   ├── App.css
│   ├── App.test.js
│   └── index.js             # Giriş noktası
├── package.json
└── README.md
```

## 🚀 Kurulum

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm (v6 veya üzeri)

### Adımlar

1. Projeyi klonlayın:
```bash
git clone https://github.com/VVuslat/myk_frontend.git
cd myk_frontend
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm start
```

4. Tarayıcınızda `http://localhost:3000` adresini açın.

## 🧪 Test Çalıştırma

### Tüm testleri çalıştırma:
```bash
npm test
```

### Test coverage raporu oluşturma:
```bash
npm test -- --coverage
```

### Testleri watch modunda çalıştırma:
```bash
npm test -- --watch
```

## 📦 Production Build

Production için optimize edilmiş build oluşturmak için:

```bash
npm run build
```

Build dosyaları `build/` klasöründe oluşturulur ve statik bir sunucuda deploy edilebilir.

## 🎨 Kullanım

1. **Uçuş Arama**:
   - Kalkış şehrini girin (örn: İstanbul)
   - Varış şehrini girin (örn: Ankara)
   - Seyahat tarihini seçin
   - "Uçuş Ara" butonuna tıklayın

2. **Sonuçları İnceleme**:
   - Bulunan uçuşlar liste halinde gösterilir
   - Her kart üzerinde fiyat, havayolu, kalkış ve varış saatleri görüntülenir

3. **Detayları Görüntüleme**:
   - "Detaylar" butonuna tıklayarak uçuş hakkında daha fazla bilgi alın
   - Modal pencerede uçak tipi, müsait koltuk sayısı gibi ek bilgiler görüntülenir

## 🧩 Bileşen Yapısı

### FlightSearchForm
Kullanıcıların kalkış, varış ve tarih bilgilerini girebildiği arama formu bileşeni.

**Props:**
- `onSearch`: Arama yapıldığında çağrılan fonksiyon
- `isLoading`: Arama durumunu belirten boolean değer

### FlightCard
Tek bir uçuşun bilgilerini gösteren kart bileşeni.

**Props:**
- `flight`: Uçuş bilgilerini içeren nesne
- `onShowDetails`: Detaylar butonuna tıklandığında çağrılan fonksiyon

### FlightDetailsModal
Uçuş detaylarını gösteren modal bileşeni.

**Props:**
- `flight`: Detayları gösterilecek uçuş nesnesi
- `onClose`: Modal kapatıldığında çağrılan fonksiyon

## 📱 Responsive Tasarım

Uygulama, aşağıdaki ekran boyutlarında test edilmiş ve optimize edilmiştir:

- **Desktop**: 1200px ve üzeri
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔒 Mock API

Proje, gerçek bir API yerine mock (sahte) API servisi kullanmaktadır. Bu servis:
- Örnek uçuş verileri içerir
- API çağrısı simülasyonu yapar (800ms gecikme)
- Kalkış ve varış şehrine göre filtreleme yapar

## 📝 Test Kapsamı

Projede aşağıdaki test senaryoları bulunmaktadır:

- **FlightSearchForm**: Form render testi, kullanıcı etkileşim testleri
- **FlightCard**: Uçuş bilgilerinin doğru gösterilmesi, detay butonu testi
- **flightService**: API servisi işlevsellik testleri
- **App**: Ana bileşen render testleri

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MYK Yazılım Geliştirici Seviye 5 projesi kapsamında geliştirilmiştir.

## 👨‍💻 Geliştirici

**VVuslat**

## 📞 İletişim

Proje ile ilgili sorularınız için GitHub Issues kullanabilirsiniz.

---

**Not**: Bu proje eğitim amaçlı geliştirilmiştir ve gerçek bir uçak bileti rezervasyon sistemi değildir.
