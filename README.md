# Yazar Blog Uygulaması

Bu uygulama, yazarların ilgi alanlarına göre konu ekleyip bunları insanlarla paylaşabilecekleri bir platformu sağlamayı amaçlar.

## Özellikler

- Yazarlar, kendi ilgi alanlarına göre konular oluşturabilir.
- Yazarlar, oluşturdukları konuları düzenleyebilir.
- Arama özelliği sayesinde kullanıcılar istedikleri konuları kolayca bulabilir.

## Kurulum

1. Bu depoyu klonlayın: `git clone https://github.com/kullanici/uygulama.git`
2. Uygulama dizinine gidin: `cd uygulama`
3. Gerekli bağımlılıkları yükleyin: `npm install`
4. Veritabanını oluşturun: `npm run migrate`
5. Sunucuyu başlatın: `npm start`

## Kullanım

1. Uygulamayı başlattıktan sonra, tarayıcınızda `http://localhost:4200` adresine gidin.
2. Yeni bir hesap oluşturun veya varolan bir hesapla giriş yapın.
3. Yazarlar, ilgi alanlarına göre konular oluşturabilir ve paylaşabilir.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen yeni özellikler veya hata düzeltmeleri için bir pull isteği açın. 

1. Bu depoyu fork edin.
2. Yeni bir branch oluşturun: `git checkout -b yeni-ozellik`
3. Yaptığınız değişiklikleri commit edin: `git commit -am 'Yeni özellik: Açıklama'`
4. Değişikliklerinizi fork ettiğiniz orijinal depoya push edin: `git push origin yeni-ozellik`
5. Bir pull isteği açın.

## Lisans

Bu proje MIT Lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasını inceleyin.
