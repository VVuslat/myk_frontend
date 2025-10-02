# Uçak Bileti Arama Frontend

Bu proje, React ile geliştirilmiş bir uçak bileti arama uygulamasıdır. Kullanıcılar kalkış-varış noktalarını ve tarih seçerek en uygun fiyatlı uçak biletlerini arayabilir.

## 🚀 Özellikler

- **Uçuş Arama**: Kalkış-varış lokasyonu ve tarih seçimi ile uçuş arama
- **Mock API**: Gerçekçi uçuş verilerini simüle eden mock API servisi
- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda sorunsuz çalışır
- **Detaylı Bilgi Modalı**: Her uçuş için detaylı bilgileri gösteren modal pencere
- **Fiyata Göre Sıralama**: Sonuçlar en uygun fiyattan başlayarak listelenir
- **Modern UI**: Tailwind CSS ile modern ve kullanıcı dostu arayüz
- **Test Coverage**: Jest ile kapsamlı birim testleri

## 🛠️ Teknolojiler

- **React 19.2.0**: Modern React hooks ve component yapısı
- **Tailwind CSS 3.x**: Utility-first CSS framework
- **Jest**: Test framework
- **React Testing Library**: Component testing
- **Create React App**: Proje iskelet yapısı

## 📋 Gereksinimler

- Node.js (v14 veya üzeri)
- npm (v6 veya üzeri)

## 🔧 Kurulum

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

Uygulama otomatik olarak `http://localhost:3000` adresinde açılacaktır.

## 🧪 Testler

### Tüm testleri çalıştırma:
```bash
npm test
```

### Test coverage raporu:
```bash
npm test -- --coverage --watchAll=false
```

### Testlerin kapsamı:
- **App Component**: Ana uygulama bileşeni testleri
- **FlightSearchForm**: Arama formu testleri
- **FlightCard**: Uçuş kartı bileşeni testleri
- **Flight API Service**: Mock API servisi testleri

## 🏗️ Build

Production build oluşturmak için:
```bash
npm run build
```

Build dosyaları `build` klasöründe oluşturulacaktır.

## 📁 Proje Yapısı

```
myk_frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── FlightCard.js          # Uçuş kartı bileşeni
│   │   ├── FlightCard.test.js
│   │   ├── FlightSearchForm.js    # Arama formu bileşeni
│   │   ├── FlightSearchForm.test.js
│   │   ├── FlightModal.js         # Detay modal bileşeni
│   │   └── FlightModal.test.js
│   ├── services/
│   │   ├── flightApi.js           # Mock API servisi
│   │   └── flightApi.test.js
│   ├── App.js                     # Ana uygulama bileşeni
│   ├── App.test.js
│   ├── index.js                   # Giriş noktası
│   └── index.css                  # Global stiller (Tailwind)
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎯 Kullanım

1. **Uçuş Arama**:
   - "Nereden" alanına kalkış şehrini girin (örn: Istanbul)
   - "Nereye" alanına varış şehrini girin (örn: Ankara)
   - Tarih seçin
   - "Uçuş Ara" butonuna tıklayın

2. **Sonuçları İnceleme**:
   - Sonuçlar fiyata göre sıralanır
   - Her kart üzerinde temel bilgiler görünür:
     - Havayolu şirketi
     - Uçuş numarası
     - Kalkış ve varış saatleri
     - Süre
     - Fiyat
     - Müsait koltuk sayısı

3. **Detayları Görüntüleme**:
   - Herhangi bir kart üzerindeki "Detaylar" butonuna tıklayın
   - Modal pencerede aşağıdaki bilgileri görüntüleyin:
     - Tam uçuş bilgileri
     - Bagaj hakkı
     - İptal politikası
     - İkram ve kolaylıklar

## 🎨 Responsive Tasarım

Uygulama tüm ekran boyutlarında düzgün çalışır:
- **Mobil** (< 768px): Tek sütun, dikey yerleşim
- **Tablet** (768px - 1024px): Karma yerleşim
- **Desktop** (> 1024px): Çok sütunlu, yatay yerleşim

## 📝 Mock API Detayları

Mock API, gerçek bir backend'e ihtiyaç duymadan uygulama işlevselliğini test etmenizi sağlar:

### Havaalanları:
- Istanbul (IST, SAW)
- Ankara (ESB)

### Havayolu Şirketleri:
- Turkish Airlines
- Pegasus Airlines
- AnadoluJet

### API Fonksiyonları:

1. `searchFlights(searchParams)`: Uçuş arama
   - Parametreler: `from`, `to`, `date`
   - Dönüş: Filtrelenmiş ve fiyata göre sıralanmış uçuş listesi

2. `getFlightDetails(flightId)`: Uçuş detayları
   - Parametre: `flightId`
   - Dönüş: Detaylı uçuş bilgileri ile ek hizmet bilgileri

## 🤝 Katkıda Bulunma

1. Bu repo'yu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Bir Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👤 Yazar

**VVuslat**

## 🐛 Bilinen Sorunlar

Şu anda bilinen bir sorun bulunmamaktadır. Sorun bildirmek için GitHub Issues sayfasını kullanabilirsiniz.

## 🔮 Gelecek Geliştirmeler

- [ ] Gerçek API entegrasyonu
- [ ] Kullanıcı girişi ve kayıt sistemi
- [ ] Rezervasyon yapma özelliği
- [ ] Ödeme entegrasyonu
- [ ] Çoklu dil desteği
- [ ] Karanlık mod
- [ ] Geçmiş aramalar
- [ ] Favoriler listesi
- [ ] Fiyat uyarıları

## 📞 İletişim

Sorularınız için: [GitHub Issues](https://github.com/VVuslat/myk_frontend/issues)
