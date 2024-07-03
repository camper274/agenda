# React Takvim Uygulaması

Bu proje, React ve Bootstrap kullanarak oluşturulmuş basit bir takvim uygulamasıdır. Kullanıcılar bu uygulama ile yeni etkinlikler ekleyebilir, mevcut etkinlikleri görebilir ve etkinlikleri silebilir. Takvim ay bazında görüntülenir ve kullanıcılar geçmiş ve gelecek aylara kolayca geçiş yapabilir.

## Özellikler

- **Dinamik Takvim:** Ay bazında takvim görünümü ve aylar arasında geçiş yapabilme.
- **Etkinlik Yönetimi:** Yeni etkinlikler ekleme, mevcut etkinlikleri listeleme ve etkinlikleri silme.
- **Görsel Bildirim:** Seçili gün, bugünün tarihi ve hover üzerinde farklı renkler ile vurgulama.
- **Bootstrap ve React Bootstrap:** Modern ve duyarlı bir kullanıcı arayüzü için Bootstrap kullanımı.
- **React Icons:** Navigasyon için şık ve anlaşılır ikonlar.

## Kurulum

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1. **Depoyu Klonlayın:**

    ```bash
    git clone https://github.com/kullanici-adi/react-takvim-uygulamasi.git
    cd agenda
    ```

2. **Gerekli Paketleri Yükleyin:**

    ```bash
    npm install
    ```

3. **Projeyi Çalıştırın:**

    ```bash
    npm start
    ```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı görüntüleyebilirsiniz.

## Kullanım

### Takvim

- **Aylar Arası Geçiş:** Takvimin üst kısmındaki sağ ve sol ok ikonlarına tıklayarak aylar arasında geçiş yapabilirsiniz.
- **Gün Seçimi:** Takvimdeki herhangi bir güne tıklayarak o günü seçebilirsiniz. Seçili gün farklı bir renk ile vurgulanacaktır.

### Etkinlik Ekleme

- **Yeni Etkinlik:** Sol taraftaki "Yeni Etkinlik" butonuna tıklayarak bir modal açılır. Bu modalda etkinlik günü, saati, adı, açıklaması ve davetlileri bilgilerini girerek yeni bir etkinlik ekleyebilirsiniz. Tarih alanı varsayılan olarak seçili günü gösterir ve geçmiş tarihlere etkinlik eklenemez.
- **Etkinlik Listeleme:** Seçili gün için eklenmiş etkinlikler sol tarafta listelenir.
- **Etkinlik Silme:** Listelemiş etkinliklerin sağında bulunan "Kaldır" butonuna tıklayarak etkinliği silebilirsiniz.

## Proje Yapısı

- **index.js:** Uygulamanın başlangıç noktasıdır. `createRoot` kullanılarak React 18'e uyumlu hale getirilmiştir.
- **App.js:** Uygulamanın ana bileşenidir. Modal, etkinlik ekleme, silme ve seçili günün etkinliklerini listeleme işlevlerini içerir.
- **Calendar.js:** Takvim bileşenidir. Ay ve yıl bazında günlerin görüntülenmesini, etkinliklerin günlere eklenmesini ve hücrelerin vurgulanmasını sağlar.
- **Calendar.css:** Takvim ve etkinliklerin stil dosyasıdır.

## Teknolojiler

- **React:** Kullanıcı arayüzünü oluşturmak için kullanılmıştır.
- **Bootstrap ve React Bootstrap:** Duyarlı ve modern tasarımlar oluşturmak için kullanılmıştır.
- **React Icons:** Kullanıcı arayüzü ikonları için kullanılmıştır.

## Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir `issue` açın veya bir `pull request` gönderin.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakabilirsiniz.
