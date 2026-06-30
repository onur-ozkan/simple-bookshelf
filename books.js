// TODO: Store all my books here.
const BOOKS = new Map([
    [
        1,
        {
            "isbn": "978-6254299766",
            "title": "Zaman Felsefesinin Kısa Tarihi",
            "original-title": "A Brief History of the Philosophy of Time",
            "original-language": "EN",
            "originally-published": 2013,
            "written-by": [
                { "name": "Adrian Bardon", "role": "Author" },
                { "name": "Özgür Yalçın", "role": "Translator" },
            ],
            "print-year": 2024,
            "genre": ["Philosophy", "Science", "Physics"],
            "language": "TR",
            "publisher": "İş Bankası Kültür Yayınları",
            "edition": "1st Edition",
            "summary": "Zaman Felsefesinin Kısa Tarihi, Sokrates öncesi filozoflardan Einstein ve sonrasına uzanan geniş bir tarihsel yelpaze içinde zamanla ilgili en önemli düşüncelerin esaslı bir özetini sunuyor. Yazarın kısa bir kitapta bu zor işin altından başarıyla kalkmasını sağlayan şey, kullandığı etkili yöntem. Bu yöntem fizik, evrimsel biyoloji ve bilişsel bilimden kaynaklanan deneysel bilgiler ile geleneksel metafiziğin argümanlarını harmanlayarak, zamanla ilgili en tutarlı dünya görüşünün ne olabileceğini araştırmaktan ibaret.\n\nZamanın gerçekten aktığı doğru mudur? Termodinamik yasaların zorunlu bir akış doğrultusu olup olmadığıyla ilgili bize söyleyebileceği bir şey var mıdır? Özel görelilik teorisi dinamik zaman anlayışıyla çelişir mi?\n\nYazar Adrian Bardon'ın zaman ve evrenle ilgili insanlığın başlangıcından bu yana sorulan ve bugün hala bilim ile metafiziğin sınırında yer almayı sürdüren sorulara cevap aramanın belki de tek makul yolunu başarılı bir şekilde uyguladığı bu kitabın felsefe öğrencilerine olduğu kadar her düzeyden meraklı okuyucuya da hitap edeceğine inanıyoruz."
        }
    ],
    [
        2,
        {
            "isbn": "978-6051067360",
            "title": "Kaos: Kaosun Başucu Kitabı",
            "original-title": "Chaos: Making a New Science",
            "original-language": "EN",
            "originally-published": 1987,
            "written-by": [
                { "name": "James Gleick", "role": "Author" },
                { "name": "İlkay Alptekin Demir", "role": "Translator" },
            ],
            "print-year": 2024,
            "genre": ["Science", "Physics", "Mathematics"],
            "language": "TR",
            "publisher": "Alfa Yayınları",
            "edition": "7th Edition",
            "summary": "Çin'de kelebek kanat çırptığında Atlantik'te fırtına çıkar.\n\nKaos her yerde karşımıza çıkar. Sigara dumanı bir takım düzensiz helezonlar çizerek yükselir. Musluktan akan su önce düzenli aralıklarla düşerken bir süre sonra düzeni bozulur. Havanın davranışında, otoyolda birbiri peşi sıra giden arabalarda, borsada ve aklınıza gelebilecek her türlü çoklu sistemlerde kaos ortaya çıkar. Çin'de bir kelebeğin kanat çırpışı Atlantik okyanusunda fırtınaya neden olur. Peki bütün bu kaosun içinden düzenlilik nasıl ortaya çıkar? Bu anlamda artık kaos bir durumun veya sürecin bilimi değil, varoluşun bilimidir.\n\nJames Gleick bu yeni bilimi halka tanıtan ilk bilim insanlarından biridir. Uluslararası çok satan bu ödüllü kitabın genişletilmiş baskısını yeni çeviriyle okurlarımıza sunarak Kaos biliminin başvuru kitabını yeniden Türkçeye kazandırmanın mutluluğunu yaşıyoruz..."
        }
    ],
    [
        3,
        {
            "isbn": "978-0141027821",
            "title": "The Sleepwalkers: How Europe Went to War in 1914",
            "original-title": "The Sleepwalkers: How Europe Went to War in 1914",
            "original-language": "EN",
            "originally-published": 2012,
            "written-by": [
                { "name": "Christopher Clark", "role": "Author" },
            ],
            "print-year": 2013,
            "genre": ["History", "War", "Politics"],
            "language": "EN",
            "publisher": "Penguin",
            "edition": "1st Edition",
            "summary": "The moments that it took Gavrilo Princip to step forward to the stalled car and shoot dead Franz Ferdinand and his wife were perhaps the most fateful of the modern era. An act of terrorism of staggering efficiency, it fulfilled its every aim: it would liberate Bosnia from Habsburg rule and it created a powerful new Serbia, but it also brought down four great empires, killed millions of men and destroyed a civilization. What made a seemingly prosperous and complacent Europe so vulnerable to the impact of this assassination?\n\nIn The Sleepwalkers Christopher Clark retells the story of the outbreak of the First World War and its causes. Above all, it shows how the failure to understand the seriousness of the chaotic, near genocidal fighting in the Balkans would drag Europe into catastrophe."
        }
    ],
    [
        4,
        {
            "isbn": "978-1512182378",
            "title": "Through South Africa",
            "original-title": "Through South Africa",
            "original-language": "EN",
            "originally-published": 1917,
            "written-by": [
                { "name": "Henry Morton Stanley", "role": "Author" },
            ],
            "print-year": 2015,
            "genre": ["Travel", "Adventure"],
            "language": "EN",
            "publisher": "The Perfect Library",
            "edition": "N/A",
            "summary": "Henry Morton Stanley (1841–1904), the Welsh-born explorer famous for his 1871 meeting with the missionary David Livingstone, travelled widely in Africa. First published in 1898, this is a compendium of letters written by Stanley during his travels to Bulawayo, Johannesburg and Pretoria, which lend a unique insight into colonial South Africa in the late nineteenth century. Focusing on the country's culture and commercial development, he recalls his impressions of industries such as railways, farms and gold mines, social issues such as immigration and poverty, and the contentious relations between the Boer peoples and the British colonists which led to the Second Boer War. Through his passionate exposition, we learn of his adversity towards President Kruger's policies, and his compassion for the people who he claims were left to starve because the government's priorities were military. His memoirs provide a revealing snapshot of an important period in South Africa's history."
        }
    ],

    [
        5,
        {
            "isbn": "978-9752448377",
            "title": "Yavaşla",
            "original-title": "Yavaşla",
            "original-language": "TR",
            "originally-published": 2018,
            "written-by": [
                { "name": "Kemal Sayar", "role": "Author" },
            ],
            "print-year": 2025,
            "genre": ["Psychology"],
            "language": "TR",
            "publisher": "Kapı Yayınları",
            "edition": "71th Edition",
            "summary": "Büyüğün küçüğü yendiği bir dünyadan, hızlının yavaşı yuttuğu bir dünyaya doğru gidiyoruz.Afrika sözünde söylendiği gibi, \"O kadar hızlı gidiyoruz ki ruhlarımız arkada kalıyor.\" Kemal Sayar, daha akıllı telefonların, daha hızlı internetin ve daha hızlı otomobillerin çağında yaşayan bizlere, üzerinde \"Yavaşla!\" yazan bir tabela gösteriyor adeta. Hatırlamanın, o geniş şimdide yani anda olmanın, yavaşlığın keşfi ve keyfini sürmenin erdemleri üzerinde düşünmeye çağırıyor bizi. Herkesin zamansızlıktan yakındığı bu çağda; hız yapmanın zaman kazandırmadığını, o hızla benliğimizden, sevdiklerimizden ve biricik hayatımızı duyumsayarak yaşamaktan uzaklaştığımızı anlatıyor. Modern hayatın baş döndürücü hızından uzaklaşmak ve sevdiklerinin gözlerinin içine bakmak isteyenler için, bir kılavuz kitap."
        }
    ],
    [
        6,
        {
            "isbn": "978-62578549301",
            "title": "Hakikat Arayışı",
            "original-title": "El-Münkız Mine'd-Dalal",
            "original-language": "AR",
            "originally-published": 1107,
            "written-by": [
                { "name": "İmam Gazzali", "role": "Author" },
                { "name": "Abdurrezzak Tek", "role": "Translator" },
            ],
            "print-year": 2024,
            "genre": ["Autobiography", "mysticism"],
            "language": "TR",
            "publisher": "Ketebe Yayınları",
            "edition": "6th Edition",
            "summary": "El-Münkız Mine'd-Dalal, kendi çağındaki İslam düşüncesi fikir ve inanç hareketlerini ele almasının yanı sıra şüpheciliğe dair ortaya koyduğu ve o güne kadar benzeri görülmemiş yorumuyla da İslam düşünce tarihinin en özgün metinlerinden birisidir. Kısaca el-Münkız olarak bilinen bu meşhur eser, Gazzali'nin kendi düşünce dünyasındaki büyük değişim ve gelişimi anlattığı bir tür otobiyografik metindir.Elinizde tuttuğunuz metin, dünyanın çeşitli kütüphanelerinde çok sayıda yazma nüshası bulunan el-Münkız'ın bilinen en eski nüshası baz alınarak ve diğer nüshalarla karşılaştırılarak hazırlandı."
        }
    ],

    [
        7,
        {
            "isbn": "978-6057092311",
            "title": "İki Şehveti Dizginlemek.Mide ve Cinsellik",
            "original-title": "Kitabu Kesru'ş-Şehveteyn",
            "original-language": "AR",
            "originally-published": 1096 - 1102,
            "written-by": [
                { "name": "İmam Gazzali", "role": "Author" },
                { "name": "Ersan Urcan", "role": "Translator" },
            ],
            "print-year": 2025,
            "genre": ["İslamic ethics", "mysticism"],
            "language": "TR",
            "publisher": "Çelik Yayınevi",
            "edition": "1th",
            "summary": "İmam- ı Gazâlî’nin en büyük eseri olan İhyâu Ulûmi’d - Din, her dönem Müslümanlar için ilk akla gelen başvuru kaynağı olmuş ve bu esere büyük güven duyulmuştur.İhyâu Ulûmi’d - Din, dört ana bölümden ve her bölüm de onar konudan oluşmaktadır.İhyâu Ulûmi’d - Din içinde yer alan konuların her biri, eserin orijinal anlatımı asla bozulmadan, akıcı ve duru bir dil kullanılarak çevirisi yapıldı ve başlı başına birer kitap haline getirildi.İhyâu Ulûmi’d - Din’in üçüncü bölümü olan Helak Edici Şeyler Bölümü’nün üçüncü konusu İki Şehveti Dizginlemek’tir.İmam - ı Gazâlî bu eserinde; açlığın fazileti, faydaları, mide şehvetini dizginleme, açlığın hükmü ve insanların ahvaline göre onun fazileti, şehvetin terkinde riyazetin önemi ve evlenme hususunda yapılması gerekenler gibi önemli konular hakkında bilgiler verir.Sonuçta ise mide, göz ve tenasül organının şehvetine muhalefet eden kimsenin ulaşacağı yüksek faziletler hakkında geniş izahat yapar ve bu noktaya ulaşmak için nasıl bir yol takip edilmesi gerektiğini izah eder."
        }
    ],

    [
        8,
        {
            "isbn": "978-6057092311",
            "title": "Nefs Terbiyesi ve Ahlakı Güzelleştirme",
            "original-title": "Kitabü Riyazeti'n Nefs ve Tehzibi'l Ahlak",
            "original-language": "AR",
            "originally-published": 1096 - 1102,
            "written-by": [
                { "name": "İmam Gazzali", "role": "Author" },
                { "name": "Ersan Urcan", "role": "Translator" },
            ],
            "print-year": 2025,
            "genre": ["İslamic ethics", "mysticism"],
            "language": "TR",
            "publisher": "Çelik Yayınevi",
            "edition": "1th",
            "summary": "İhyâu Ulûmi’d-Din’ in üçüncü bölümü olan Helak Edici Şeyler Bölümü’ nün ikinci konusu Nefs Terbiyesi ve Ahlâkı Güzelleştirme’ dir.İmam- ı Gazâlî bu eserinde; kalp hastalıklarının birçok kısımlarına işâret ediyor.Özetle onların tedavisi hakkındaki sözün keyfiyetine, hastalıkların hususî ilâcının tafsilâtını yapmaksızın parmak basıyor.Ahlâkın güzelleştirilmesine genel bir bakış sunarak, bedenin ilâcını buna misâl gösteriyor.Tâ ki, bilinmesi insanların zihinlerine yaklaşsın.Tâ ki bununla güzel ahlâkın faziletinin beyanı açıklığa kavuşsun.Sonra güzel ahlâkın hakikatinin beyanı...Sonra ahlâkların riyâzetle değişmeyi kabul etmesinin beyanı... Sonra güzel ahlâka vardıran sebebin beyanı... Sonra ahlâkların tehzibine varan yolların tafsilini bildiren yolların beyanını yapıyor.Sonra nefislerin riyâzeti... Sonra kalp hastalığının bilinmesinin alâmetlerinin beyanı... Sonra insanoğlunun nefsinin ayıplarını bilmesinde vesile olan yolların beyanı... Sonra kalplerin tedavi yolunun beyanı...Sonra güzel ahlâkın alâmetlerinin beyanı... Sonra gelişmenin başlangıcında çocukların riyâzetindeki yolun beyanı... Sonra iradenin ve mücâhede mukaddimelerinin beyanını açıklığa kavuşturuyor."
        }
    ],

    [
        9,
        {
            "isbn": "978-6258539169",
            "title": "Kibir ve Kendini Beğenmişlik",
            "original-title": "Kitabu Zemmi'l Kibr ve'l Ucb",
            "original-language": "AR",
            "originally-published": 1096 - 1102,
            "written-by": [
                { "name": "İmam Gazali", "role": "Author" },
                { "name": "Ersan Urcan", "role": "Translator" }
            ],
            "print-year": 2025,
            "genre": ["İslamic ethics", "mysticism"],
            "language": "TR",
            "publisher": "Çelik Yayınevi",
            "edition": "1th",
            "summary": "“Yeryüzünde böbürlenerek dolaşma. Çünkü sen (ağırlık ve azametinle) ne yeri yarabilir ne de dağlarla yükseklik yarışına girebilirsin.”(İsra Suresi, 37)İmam-ı Gazâlî’nin en büyük eseri olan İhyâu Ulûmi’d-Din, Müslümanlar için her dönem ilk akla gelen başvuru kaynağı olmuş ve bu esere büyük güven duyulmuştur.İhyâu Ulûmi’d-Din, dört ana bölümden ve her bölüm de onar konudan oluşmaktadır. İhyâu Ulûmi’d-Din içinde yer alan konuların her biri, eserin orijinal anlatımı asla bozulmadan, akıcı ve duru bir dil kullanılarak çevirisi yapıldı ve başlı başına birer kitap haline getirildi. İhyâu Ulûmi’d-Din’in üçüncü bölümü olan Helak Edici Şeyler Bölümü’nün dokuzuncu konusu Kibir ve Kendini Beğenmişlik hakkındadır.Kibir ve kendini beğenmişlik öldürücü virüs gibidir. Kibirlenen ve böbürlenen kişiler ise bu virüsten etkilenip hasta olmuş insanlardır. Allah (cc) katında bu hasletlere buğzedilir ve onlardan nefret edilir. Bunlar insanı helak edici en çirkin hasletlerdir.Bu eserde bu iki hastalığın ne olup ne olmadığı etraflı bir şekilde ele alındıktan sonra tedavi yöntemleri hakkında bilgi verilmektedir. "
        }
    ],

    [
        10,
        {
            "isbn": "978-6254299766",
            "title": "Zaman Felsefesinin Kısa Tarihi",
            "original-title": "A Brief History of the Philosophy of Time ",
            "original-language": "EN",
            "originally-published": 2013,
            "written-by": [
                { "name": "Adrian Bardon", "role": "Author" },
                { "name": "Özgür Yalçın", "role": "Translator" }
            ],
            "print-year": 2025,
            "genre": ["Philosophy", "History"],
            "language": "TR",
            "publisher": "İş Bankası Kültür Yayınları",
            "edition": "1th",
            "summary": "Zaman Felsefesinin Kısa Tarihi, Sokrates öncesi filozoflardan Einstein ve sonrasına uzanan geniş bir tarihsel yelpaze içinde zamanla ilgili en önemli düşüncelerin esaslı bir özetini sunuyor. Yazarın kısa bir kitapta bu zor işin altından başarıyla kalkmasını sağlayan şey, kullandığı etkili yöntem. Bu yöntem fizik, evrimsel biyoloji ve bilişsel bilimden kaynaklanan deneysel bilgiler ile geleneksel metafiziğin argümanlarını harmanlayarak, zamanla ilgili en tutarlı dünya görüşünün ne olabileceğini araştırmaktan ibaret.Zamanın gerçekten aktığı doğru mudur? Termodinamik yasaların zorunlu bir akış doğrultusu olup olmadığıyla ilgili bize söyleyebileceği bir şey var mıdır? Özel görelilik teorisi dinamik zaman anlayışıyla çelişir mi?"
        }
    ],

    [
        11,
        {
            "isbn": "978-6051067360",
            "title": "Kaos",
            "original-title": "Chaos",
            "original-language": "EN",
            "originally-published": 1987,
            "written-by": [
                { "name": "James Gleick", "role": "Author" },
                { "name": "İlkay Alptekin Demir", "role": "Translator" }
            ],
            "print-year": 2025,
            "genre": ["Popular Science"],
            "language": "TR",
            "publisher": "ALfa Yayınları",
            "edition": "7th",
            "summary": "Kaos her yerde karşımıza çıkar. Sigara dumanı bir takım düzensiz helezonlar çizerek yükselir. Musluktan akan su önce düzenli aralıklarla düşerken bir süre  sonra düzeni bozulur. Havanın davranışında, otoyolda birbiri peşi sıra giden arabalarda, borsada ve aklınıza gelebilecek her türlü çoklu sistemlerde kaos ortaya çıkar. Çin’de bir kelebeğin kanat çırpışı Atlantik okyanusunda fırtınaya neden olur. Peki bütün bu kaosun içinden düzenlilik nasıl ortaya çıkar? Bu anlamda artık kaos bir durumun veya sürecin bilimi değil,  varoluşun bilimidir. James Gleick bu yeni bilimi halka tanıtan ilk bilim insanlarından biridir."
        }
    ],

    [
        12,
        {
            "isbn": "978-6256774827",
            "title": "Kullanışlı Düşmanlar : Batı siyaset düşüncesinde İslam ve Osmanlı 1450-1750",
            "original-title": "Useful Enemies: Islam and The Ottoman Empire in Western Political Thought, 1450-1750",
            "original-language": "EN",
            "originally-published": 2019,
            "written-by": [
                { "name": "Noel Malcolm", "role": "Author" },
                { "name": "Özden Arıkan", "role": "Translator" }
            ],
            "print-year": 2024,
            "genre": ["History", "politics"],
            "language": "TR",
            "publisher": "Kronik Kitap",
            "edition": "1th",
            "summary": "İngiliz tarihçi Noel Malcolm, Kullanışlı Düşmanlar’da bu gibi soruları cevaplarken Osmanlı İmparatorluğu’nun Batı dünyası üzerindeki etkilerini ve Avrupalıların bu güç karşısındaki tutumunu derinlemesine inceliyor. Malcolm; Machiavelli’den Bodin’e, Voltaire’den Montesquieu’ye kadar birçok ünlü düşünürün eserlerinden yararlanarak, Batı’nın Osmanlı ve İslam algısının karmaşıklığını ve zamanla nasıl değiştiğini ortaya koyuyor. Bu fikirlerin Batı’nın güç, din, toplum ve savaşla ilgili tartışmalarıyla nasıl iç içe geçtiğini gösteriyor.Osmanlıların Avrupa siyaset düşüncesini nasıl değiştirdiğini anlatan Kullanışlı Düşmanlar, tarihseverlere yeni ufuklar açacak."
        }
    ],
    [
        13,
        {
            "isbn": "978-6256774742",
            "title": "İmparatorluğun Ajanları",
            "original-title": "Agents of Empire: Knights",
            "original-language": "EN",
            "originally-published": 2016,
            "written-by": [
                { "name": "Noel Malcolm", "role": "Author" },
                { "name": "Okan Güven", "role": "Translator" }
            ],
            "print-year": 2024,
            "genre": ["History",],
            "language": "TR",
            "publisher": "Kronik Kitap",
            "edition": "1th",
            "summary": "İmparatorluğun Ajanları, imparatorluklar, kültürler ve dinler arasındaki belirsiz sınırlar üzerindeki küçük yaşamların Osmanlı ve Hıristiyan dünyalarına düşürdükleri gölgeleri büyük bir ustalıkla inceliyor. Yıllar süren arşiv dedektifliğinin ürünü olan İmparatorluğun Ajanları: 16. Yüzyıl Akdeniz dünyasında Şövalyeler, Korsanlar, Cizvitler ve Casuslar pek çok tarihsel klişeye karşı panzehir görevi görerek sizleri, kişisel bağlılıkların ve dini koalisyonların sürekli değiştiği, ulus devletlerden çok önceki bir döneme götürecek."
        }
    ],
    [
        14,
        {
            "isbn": "978-9752895546",
            "title": "Bereketli Topraklar Üzerinde",
            "original-title": "Bereketli Topraklar Üzerinde",
            "original-language": "TR",
            "originally-published": 1954,
            "written-by": [
                { "name": "Orhan Kemal", "role": "Author" },

            ],
            "print-year": 2025,
            "genre": ["Turkish literature", "Novel"],
            "language": "TR",
            "publisher": "Everest Yayınları",
            "edition": "70th",
            "summary": "Bu kitap, kendi bilgi ve görgülerim dışında, bir lokma ekmek için kötü iş şartları içinde zehir gibi bir hayatı yaşayanlardan derlenmiş malzemeyle meydana gelmiştir. Yayımlanmadan önce, çeşitli ırgat, usta, usta yardımcısını toplayarak bir gece sabaha kadar okudum onlara. Dinlediler. 'Pardon,' dediler, 'bu bu kadar olur. Bütün anlattıkların doğru. Eksik bile. Çukurova'nın bereketli topraklarında öyle işler olur ki, aklın durur. Sana anlatsak, bir değil beş roman çıkarırsın.\"Orhan Kemal'in kitapları bir okurun hayatta rastlayabileceği o çok nadir hazineler arasında yer alır. Çok az yazar okurunun dünyasında onun kadar iz bırakır, okurunu onun kadar biçimlendirir. Orhan Kemal umudu ve iyimserliği yeniden kazanmamız için yol gösterir bize."
        }
    ],
    [
        15,
        {
            "isbn": "978-6057683724",
            "title": " İstiklal Mahkemesi Hatıraları",
            "original-title": "Matbuat Alemindeki Hayatım",
            "original-language": "TR",
            "originally-published": 1928 - 1951,
            "written-by": [
                { "name": "Tahirül Mevlevi", "role": "Author" },
                { "name": "Nurcan Boşdurmaz", "role": "Compiler" }
            ],
            "print-year": 2025,
            "genre": ["Memoir", "History"],
            "language": "TR",
            "publisher": "Büyüyenay",
            "edition": "2th",
            "summary": "İstiklâl Mahkemeleri hakkında yayımlanan birkaç önemli kitap arasında yer alan Tâhirü’l-Mevlevî’nin İstiklâl Mahkemesi Hatıraları adeta gelecek nesillere aktarmak üzere kaleme alınmış bir vesika niteliğine sahiptir. Yakın tarihimize dair tanıklıkları ve şahitlikleri içermesi sebebiyle, çok yönlü bir okumaya ve değerlendirmeye tabi tutulabilecek bir eser vasfını daima korumuştur.Osmanlı’nın çöküşü ve devrimler Türkiye’sinin doğuşuna şahit olup tekke ve zaviyelerin kapatılması, harf ve şapka inkılâplarıyla hayli sıkıntılı günler yaşayan yazar birçok yerde sessiz kalmayı tercih etmiştir. Ancak ilerleyen sayfalar boyunca bu sessizliğin aslında birçok şeyi de anlatmakta olduğu görülecektir."
        }
    ],
    [
        16,
        {
            "isbn": "978-9754586176",
            "title": "Atatürk'ün Sırdaşı : Kılıç Ali'nin Anıları",
            "original-title": "",
            "original-language": "TR",
            "originally-published": "N/A",
            "written-by": [
                { "name": "Kılıç Ali Paşa", "role": "Author" },
                { "name": "Hulusi Turgut", "role": "Compiler" }
            ],
            "print-year": 2024,
            "genre": ["Memoir", "History"],
            "language": "TR",
            "publisher": "İş Bankası Kültür Yayınları",
            "edition": "29th",
            "summary": "Ben, sözünü edeceğim olayları tarihtir diye anlatmayacağım. Bu, gelecek nesillerin işidir. Benim yazdıklarım tarih gerçeklerini aydınlatacak bir kaynak olursa ne mutlu bana.Çok genç yaşta Atatürk' ün silah ve mücadele arkadışı, vefatına kadar da onun en güvendiği dostlarından, sırdaşlarından olan Kılıç Ali, kendi gözünden ve kendi yaşadıklarından,tanıklık ettiği olaylardan yola çıkarak Kurtuluş Savaşı ve sonrasını anlatıyor"
        }
    ],
    [
        17,
        {
            "isbn": "978-6052950050",
            "title": "Osmanlı Bahriyesinde Bir Amerikalı Bucknam Paşa",
            "original-title": "",
            "original-language": "TR",
            "originally-published": 2017,
            "written-by": [
                { "name": "Ender Kuntsal", "role": "Author" },

            ],
            "print-year": 2017,
            "genre": ["Memoir", "Biography", "History"],
            "language": "TR",
            "publisher": "İş Bankası Kültür Yayınları",
            "edition": "1th",
            "summary": "Osmanlı Bahriyesi’nde müşavirlik geleneği 1900’lere kadar sürer. Bu süreçte müşavirlik yapan pek çok yabancı arasında bir Amerikalıya rastlanır: Ransford Dodsworth Bucknam. Bahriyede “Tüccar Kaptan” olarak da tanınan Bucknam Paşa, kaptanlık yapmasının yanı sıra II. Abdülhamid’in özel yaverliğini de yürütür.Bucknam Paşa’nın bahriye hizmeti, 1904 yılında Philadelphia’da inşaası tamamlanan Mecidiye kruvazöründe İstanbul’a getirmekle başlar ve 1909 yazına kadar devam eder. Çok sayıda savaş gemisinin alınmasında ve getirilmesinde önemli rol oynar. Bu dönemin üç buçuk yılında yaverliğini ve tercümanlığını yapan Rauf Orbay anılarında Bucknam Paşa’ya ayrı bir yer verir. Osmanlı donanmasında yarbay, albay ve amiral rütbeleriyle görev yapan Bucknam Paşa’nın hayatı Amerikan ve Kanada basını tarafından da yakından izlenir. Sivil hayata döndükten sonra da alıştığı ve sevdiği ülkeden ayrılmayıp eşiyle birlikte İstanbul’da yaşayan Bucknam Paşa burada ticarete atılır.Ender Kuntsal’ın yaptığı geniş bir arşiv çalışmasının ürünü olan bu kitap hem Bucknam Paşa hem de Osmanlı Bahriyesi’nin o dönemki faaliyetleri hakkında ayrıntılı bilgiler sunuyor."
        }
    ],

    [
        18,
        {
            "isbn": "978-6254051357",
            "title": "Hitler Almanyası'nda Berlin Sefirliği Hatıralarım (1939-1942)",
            "original-title": "",
            "original-language": "TR",
            "originally-published": 2020,
            "written-by": [
                { "name": "Hüsrev Gerede", "role": "Author" },
                { "name": "Hulusi Turgut", "role": "Compiler" }
            ],
            "print-year": 2021,
            "genre": ["Memoir", "History"],
            "language": "TR",
            "publisher": "İş Bankası Kültür Yayınları",
            "edition": "2th",
            "summary": "Yıl 1939. İnsanlığın üzerine kâbus gibi çöken II. Dünya Savaşı’nın başladığı dönemde, Hüsrev Gerede Japonya’dan Berlin’e büyükelçi olarak atanır. Almanya’nın Polonya’yı işgal ettiği 1 Eylül 1939 tarihinden iki gün sonra başladığı görevine 27 Temmuz 1942’ye kadar devam eder. Yaklaşık üç yıl boyunca Almanya ve Türkiye arasındaki ilişkilerin sağlıklı yürümesi ve Türkiye’nin tarafsızlık kararının önemini anlatmak için çalışır. Bu dönemde, savaşa dahil olan bütün devletlerin dış politikaları, devlet adamları ve bire bir şahit olduğu Almanya’nın tutumu hakkında oldukça ayrıntılı bilgi sahibi olur. Yaşadıklarını ve gözlemlerini günü gününe not alır. Gerede’nin o yıllarda tuttuğu notlarından yola çıkarak 1960 yılında kaleme aldığı ve aile arşivinden fotoğraflarla zenginleşen anıları, İlber Ortaylı’nın kitabın önsözünde işaret ettiği gibi “Cumhuriyet’in kuruluşu ve bilhassa II. Harp’teki dış politika açısından bize oldukça düzgün ve doğru bir malumat verecek"
        }
    ],

    [
        19,
        {
            "isbn": "978-6257706438",
            "title": "Yıldız’da Neler Gördüm? : Yıldız’da Neler Gördüm? Abdülhamid devrinden Meşrutiyet’e Saray Hatıraları",
            "original-title": "",
            "original-language": "TR",
            "originally-published": 2021,
            "written-by": [
                { "name": " İsmail Müştak Mayakon ", "role": "Author" },
                { "name": "Recep Yılmaz ", "role": "Compiler" }
            ],
            "print-year": 2021,
            "genre": ["Memoir", "History", "Biography"],
            "language": "TR",
            "publisher": "Kapı Yayınları",
            "edition": "1th",
            "summary": "Tarih sadece sadece tarihçilerin yazdıkları değildir.Dönemlerin, olayların içinde bizzat yaşayanların, görüp işiten insanların tanıklıklarından da oluşur.Hele bu insanlar Osmanlı Padişahları gibi devirlerinin birinci öznesi konumundaki varlıkların en yakınında bulunmuş kişiler iseler, onların yazdıkları ayrıca önemlidir. Osmanlı’nın son demleri. İçeride ve dışarıda büyük çalkantılar var… Devleti tek başına yönetmeye çalışan II. Abdülhamid… Tartışmalı kişiliği, mutlakiyetçi idare anlayışı ve tarihsel sıkışmışlık iç içe. Herkes bir çıkış yolu arıyor.  Mekteplileri bürokrasiye katma politikası yürüten Abdülhamid, tam da burada önemli adımlar atıyor.İsmail Müştak Mayakon. Mülkiye’yi birincilikle bitirmiş bir genç adam. Beklenmedik bir zamanda Saray idaresine alınıyor. Mâbeyn kâtibi olarak Yıldız’daki masasında buluyor kendini. Böylece daha öğrencilik döneminden beri muhalif olduğu bir padişahın idaresi altına giriveriyor… Muhalif olduğu bir padişahın kalbine sokulmak, orada olup bitenlere şahitlik etmek az şey sayılmaz.  Meşrutiyet, Abdülhamid’in tahttan indirilmesi ve fırtına  gibi geçen yıllar arka arkaya geliyor. Mayakon, bir kısmını Meşrutiyet sonrası, bir kısmını da Cumhuriyet döneminde kaleme aldığı hatıralarında, Yıldız Sarayı’nda gördüklerini, yaşadıklarını, işittiklerini kaleme alıyor. Kendince yorumlarda bulunuyor. Artık tarihe mal olmuş olaylara mercek tutuyor. Olaylar, şahıslar, mekânlar, olgular dönemin ve  2. Abdülhamid’in çevresinde yeniden can buluyor.İsmail Müştak’ın anılarının ilk baskısı esas alınarak hazırlanan Yıldız’da Neler Gördüm, kişi, olay ve gelişmelere ilişkin ayrıntılı dipnotlarla daha nitelikli bir hale getirilirken bazı teknik hatalar tamir ediliyor. Tarihin her yönden iyi ve doğru anlaşılması ve her sesin dikkate değer bulunması açısından Yıldız’da Neler Gördüm farklı bir kitap."
        }
    ],

    [
        20,
        {
            "isbn": "978-6257706803",
            "title": "Balkanlar Dağlarından Dersaadet'e: İsyancı Bir Osmanlı Subayının Meşrutiyet Hatıraları",
            "original-title": "Hatırat-ı Niyazi",
            "original-language": "TR-OTA",
            "originally-published": 1910,
            "written-by": [
                { "name": "Resneli Niyazi", "role": "Author" },
                { "name": "Mecit Yıldız", "role": "Compiler" }
            ],
            "print-year": 2022,
            "genre": ["Memoir", "History"],
            "language": "TR",
            "publisher": "Kapı Yayınları",
            "edition": "1th",
            "summary": "Vaktiyle bir Balkan kasabası olan Resne, onun ismiyle simgeleşti. İsyan, özgürlük, dağa çıkma, Meşrûtiyet, İstanbul, II. Abdülhamid, Payitaht gibi kelimelerle iç içe geçince de tarihsel bir hüviyet kazandı.Gün geldi “Hürriyet Kahramanı” olarak nam saldı.Devir, Sultan II. Abdülhamid zamanı…Resneli Niyazi, 1908 yılının Temmuz ayı başında beraberinde 150 kadar gönüllü ve askerle Ohri civarındaki dağa çıktı, bir isyanın fitilini ateşledi. Onun bu hamlesinin varabileceği noktayı gören Sultan II. Abdülhamid,üç hafta gibi kısa bir sürede Meşrûtiyet sistemini ilan etmek zorunda kaldı.Bir roman karakteri kadar renkli kişiliğe sahip Resneli Niyazi, dağda bularak evcilleştirdiği geyikle birlikte yeniden şehre indi, Selânik’te “Hürriyet kahramanı” olarak büyük bir coşkuyla karşılandı. Geyik, Meşrûtiyet ilanının sembolü hâline geldi ve “gazal-ı hürriyet” olarak tanındı.Balkan Savaşı döneminde İstanbul’a doğru yola çıkmak üzereyken, İttihat ve Terakki Cemiyeti’nin kendisine tahsis ettiği bir muhafız tarafından öldürüldü ve bu cinayet üzerindeki sis perdesi hâlen kalkmış değil…Elinizdeki kitap onun 1910 yılında “Hâtırât-ı Niyazi” adıyla kaleme aldığı, Meşrûtiyet ilanına giden sürecin hikâyesidir. "
        }
    ],

    [
        21,
        {
            "isbn": "978-6057635679",
            "title": "Bir Darbeci Subayın Hatıraları",
            "original-title": "Bir Darbeci Subayın Hatıraları",
            "original-language": "TR",
            "originally-published": 2020,
            "written-by": [
                { "name": "Bahtiyar Yalta", "role": "Author" },
                { "name": "Erhan Çifçi", "role": "Compiler" }
            ],
            "print-year": 2023,
            "genre": ["Memoir", "History", "Politics"],
            "language": "TR",
            "publisher": "Kronik Kitap",
            "edition": "2th",
            "summary": "Bahtiyar Yalta; Ağustos 1950’de gönüllü olarak Kore Savaşı’na katılmış, yurda döner dönmez katıldığı Cumhurbaşkanlığı Muhafız Alayı başta olmak üzere Türk Silahlı Kuvvetleri’ne pek çok alanda hizmet etmiş, Ağustos 1960’ta Kara Harp Okulu II. Öğrenci Taburu komutanı olarak görevlendirilmiş, 22 Şubat 1962 olayı ile 24 Şubat 1962’de kurmay kıdemli binbaşı olarak emekli edilmiştir. 21 Mayıs 1963’teki ihtilal girişimine katıldığı için dört seneye yakın cezaevinde kalmıştır. Demokrat Parti’ye karşı yürütülen gizli yapılanmalarda önemli rol oynayan ve bir döneme damgasını vuran Talat Aydemir’in mesai arkadaşlarından biri olmasının yanı sıra pek çok konuda fikirlerine başvurulmuş ve kendisine kritik görevler verilmiştir. 22 Şubat 1962 ve 21 Mayıs 1963 tarihlerinde yaşanan iki darbe girişiminde olayların merkezinde yer alması nedeniyle Bahtiyar Yalta’nın hatıraları büyük bir önem arz etmektedir. Her iki süreçte de etkin rol oynayan kişilerle yaptığı görüşmeleri aktarması bu hatıraları daha da değerli kılmaktadır. Yalta’nın anıları engin bir hafızanın Türk tarihine armağanıdır"
        }
    ],

    [
        22,
        {
            "isbn": "978-9944880954",
            "title": "1890'larda İstanbul",
            "original-title": "Constantinople",
            "original-language": "EN",
            "originally-published": 1895,
            "written-by": [
                { "name": "Francis Marion Crawford", "role": "Author" },
                { "name": "Şeniz Türkömer", "role": "Translator/Compiler" }
            ],
            "print-year": 2024,
            "genre": ["Memoir", "History"],
            "language": "TR",
            "publisher": "İş Bankası Kültür Yayınları",
            "edition": "13th",
            "summary": "İstanbul 19. yüzyılın ortalarından itibaren pek çok Batılı entelektüelin kendini adeta uğramak zorunda hissettiği bir yerdi.Bu ziyaretçilerden eli kalem tutanlar mutlaka bir seyahatname yazar, çoğunlukla da tarihe karışmış Doğu Roma’yı ve gerçekte asla giremeyecekleri haremi anlatırlardı.Ancak bu kenti benimsemiş olan ABD’li edebiyatçı Francis Marion-Crawford, köşesiyle bucağıyla, sokaktaki insanlarıyla bambaşka bir İstanbul anlatmıştı.İnsanların ev ve sokak hayatlarından yeme içme alışkanlıklarına, Kapalıçarşı’daki alışveriş âdetlerinden Atpazarı’ndaki hayal kırıklıklarına kadar pek çok şey…Yaşadığı dönemde hak ettiği üne kavuşmuş bir edebiyatçı olan Crawford, göçüp giden kuşaklardan dinlediğimiz İstanbul’u, kendi gözlem gücünün ayrıntıcılığıyla da bezeyerek, dostu Edwin Lord Weeks’in ülkemizde tanınmayan çizimleriyle sunuyor."
        }
    ],

    [
        23,
        {
            "isbn": "978-6254291241",
            "title": "Binbaşı Abdürrauf’un Harp Günlükleri",
            "original-title": "Binbaşı Abdürrauf’un Harp Günlükleri",
            "original-language": "TR",
            "originally-published": 2022,
            "written-by": [
                { "name": "Abdürrauf Bey", "role": "Author" },
                { "name": "Prof. Dr. Mesut Uyar", "role": "Compiler" }
            ],
            "print-year": 2022,
            "genre": ["Memoir", "History"],
            "language": "TR",
            "publisher": "İş Bankası Kültür Yayınları",
            "edition": "1th",
            "summary": "Balkan Savaşları döneminde Şark Ordusu’nda bölük komutanı olarak cephe hizmeti yapan Abdürrauf Bey’in askerlik yaşamının en kritik görevlerinden biri, Birinci Dünya Savaşı’nı da kapsayan yıllarda Genelkurmay karargâhında bulunmasıydı. Abdürrauf Bey ve Almanya’da eğitim görmüş veya iyi derecede Almanca bilen subayların İstanbul’da önemli karargâh, birlik ve kurumlara atanmasının sebebi, Otto Liman von Sanders komutasındaki Alman Askeri Yardım Heyeti’nin Aralık 1913’te İstanbul’a gelip göreve başlamasıydı. Heyet üyesi Alman subayların hiçbiri, iyi derece Türkçe bilmediği, Osmanlı İmparatorluğu ve ordusunu tanımadığı için tercümanlara ihtiyaçları vardı.Abdürrauf Bey’in günlüklerinin en ilgi çekici kısımları arasında, 1916’da İtilaf birliklerinin Gelibolu’yu tahliyesi sonrasında Enver Paşa ve Bronsart von Schellendorf ile birlikte Çanakkale ziyareti ve Kutülamare zaferi sonrasında gerçekleşen Kafkas ve Irak cepheleri gezisi yer alır. Bu geziyle ilgili elimizde çok az bilgi bulunduğu için Abdürrauf Bey’in şahitliği çok önemlidir.Binbaşı Abdürrauf Bey’in, askeri tarih uzmanı Prof. Dr. Mesut Uyar tarafından yayına hazırlanan harp günlükleri, Osmanlı’nın son yıllarında imparatorluğun elemli günlerine tanıklık ediyor, Balkan Savaşları’na muharip subay olarak cepheden, Birinci Dünya Savaşı’na Alman komutanların emrinde görev yaptığı Genelkurmay karargâhından bakmamızı sağlıyor."
        }
    ],

    [
        24,
        {
            "isbn": "978-6257999496",
            "title": "Milli Mücadele Yıllarım",
            "original-title": "Milli Mücadele Yıllarım",
            "original-language": "TR",
            "originally-published": "N/A",
            "written-by": [
                { "name": "Fazıl Doğan", "role": "Author" },

            ],
            "print-year": 2020,
            "genre": ["Memoir", "History"],
            "language": "TR",
            "publisher": "İş Bankası Kültür Yayınları",
            "edition": "2th",
            "summary": "Birinci Dünya Savaşı’nın sonunda cepheden dönen genç doktorlar, ülkenin içinde bulunduğu durumu görerek İstanbul’dan Anadolu’ya geçmeye karar verirler. Köycülük hareketine destek olmak amacıyla Türk Ocakları çatısı altında bir araya gelen Dr. Fazıl Doğan, Dr. Reşit Galip, Dr. Hasan Ferit Cansever ve Dr. Mustafa Alp İzmir üzerinden Kütahya’nın Tavşanlı ve Emet ilçelerine giderler. Fazıl Doğan, Emetlilerin desteğiyle hem doktorluk mesleğini icra eder hem de Emet Müdafaa-i Vatan Cemiyeti’ni kurarak milli mücadele içerisinde yer alır. Kuva-yi Milliye’ye bağlı Emet Milli Müfrezesi’nin kumandanlığını yapar. İzmir’in ve Batı Anadolu’nun pek çok şehrinin Yunanlılar tarafından işgal edildiği haberleri gelmektedir. Fazıl Doğan ve müfrezesi, Çerkes Ethem’in kumandası altında işgallere karşı pek çok yerde görev alır. Aynı zamanda, 24 Haziran 1920’de Çerkes Ethem’in Ankara hükümetine karşı tutumunu ilk elden öğrenip Batı Cephesi Kumandalığı’na bildiren de Fazıl Doğan’dır. 20 Ekim 1920’de 200 kişilik piyade taburu, bini aşkın atlı tabur ve atlı makineli tüfek bölüğü ile Yunanlıları Gediz-Simav bölgesinde püskürtür. 1922 yılına kadar Batı Cephesi’nde mücadeleye devam eder. Fazıl Doğan, yıllar sonra Celâl Bayar’ın isteği üzerine Emet’te yaşadıklarını eski yazı ile kaleme alır. Kitabın sonunda tıpkıbasımına da yer verdiğimiz Fazıl Bey’in milli mücadele anıları yakın tarihimize ışık tutacaktır."
        }
    ],

    [
        25,
        {
            "isbn": "978-6057838056",
            "title": "Yeni Osmanlılar Tarihi",
            "original-title": "Mecmua-i Ebüzziya",
            "original-language": "TR-OTA",
            "originally-published": 1909,
            "written-by": [
                { "name": "Ebuzziya Tevfik", "role": "Author" },
                { "name": "Yakup Öztürk", "role": "Compiler" }
            ],
            "print-year": 2019,
            "genre": ["Memoir", "History"],
            "language": "TR",
            "publisher": "Kapı Yayınları",
            "edition": "1th",
            "summary": "Osmanlı aydın muhalefetinin tanımlanmasının ayrılmaz bir sıfatı haline gelen Yeni Osmanlılar Avrupa’da geçirdikleri zaman içinde tesadüfen bir araya geldiler. Kendilerine biçilen simgeselliğin bir karşılığı olarak hürriyet ve anayasa isteklerini imparatorluğun kurtuluşu için zorunlu olduğunu düşündüler. Osmanlı siyasal tarihinin en çalkantılı yıllarında Agâh Efendi’den Ahmet Midhat Efendi’ye, Âlî Paşa’dan Ziya Paşa’ya; Namık Kemal’den Şemseddin Sami’ye, Şinasi’ye kadar birçok önemli şahsiyetin Osmanlı gerçeğini nasıl savunduğunu görmekteyiz.Yeni Osmanlılar Tarihi hevesin ardına gizlenmiş sebatın, cesaretin kimi zaman hızla, kimi zaman acemiliğin verdiği tökezlemeyle fakat sonrasında sürgün belasına maruz kalmakla ödenen bir gençliğin hikâyesidir. "
        }
    ],

    [
        26,
        {
            "isbn": "978-6257706377",
            "title": "Saray ve Ötesi : Abdülhamid Sonrası Meşrutiyet'in İlk Yılları",
            "original-title": "Saray ve Ötesi",
            "original-language": "TR",
            "originally-published": 1940 - 1942,
            "written-by": [
                { "name": "Halid Ziya Uşaklıgil", "role": "Author" },
                { "name": "Özge Şahin", "role": "Compiler" }
            ],
            "print-year": 2021,
            "genre": ["History", "Memoir"],
            "language": "TR",
            "publisher": "Kapı Yayınları",
            "edition": "1th",
            "summary": "Çocukluk, gençlik ve ilk yetişkinliğini uzun sürmüş II. Abdülhamid döneminde geçirmiş bir entelektüel. Devrinin pek çok aydını gibi Abdülhamid'e muhalif.İttihat ve Terakki başa geçip Abdülhamid sürgüne gidince yerine V. Mehmet Reşad geçecektir..Bu vesileyle Halit Ziya'nın hayatı da temelli değişikliğe uğrar.İttihat ve Terakki adına, Dolmabahçe Sarayı'na 'Mabeyn Başkatibi' olarak atanır.Saray bürokrasisinin bu önemli makamında hükümet ile padişah arasındaki ilişkilerde kritik vazife gören Halid Ziya, hem günün politik gelişmelerine şahitlik eder hem de geçmişe doğru kimi hesaplaşmalarda bulunur. Sonrasında farklı görevlendirmelerle İttihat ve Terakki hükümetleri adına faaliyet gösterir. Büyük bir yazar, keskin bir gözlemci ve vicdan sahibi bir insan olarak görüp işittiklerini, görüş ve düşüncelerini sonradan kaleme döker.Saray ve Ötesi, büyük bir edebiyatçının kaleminden, II. Abdülhamid, V. Mehmet Reşad, İttihat ve Terakki yönetimi yanında devrin sosyal, politik ve kültürel ortamına dair yazılmış en değerli hatıratlardan birisidir. Önce tefrika edilmiş sonra da kitap olarak basılmıştır.Saray ve Ötesi sadece içerdiği tanıklıklarla değil, Halid Ziya Uşaklıgil'in üslubuyla yazıldığı için de ayrıca değerli bir kitap."
        }
    ],

    [
        27,
        {
            "isbn": "978-9754581959",
            "title": "Talat Paşa'nın Anıları",
            "original-title": "Talat Paşa'nın Anıları",
            "original-language": "TR",
            "originally-published": 1946,
            "written-by": [
                { "name": "Mehmed Talat Paşa", "role": "Author" },
                { "name": "Alpay Kabacalı", "role": "Compiler" }
            ],
            "print-year": 2024,
            "genre": ["History", "Memoir"],
            "language": "TR",
            "publisher": "İş Bankası Kültür Yayınları",
            "edition": "19th",
            "summary": "Baş aktörlerinin gözünden yakın tarihimizin en çalkantılı yılları: İttihat ve Terakki II. Meşrutiyet'le iktidara yürüyüşe başlamış; Talat Paşa, Enver ve Cemal Paşalarla birlikte devletin kaderini belirleyecek konumlara yükselmiştir.Ardından büyük kırılma noktaları gelir: Almanlarla ittifak. Yavuz ve Midilli olayıyla Birinci Dünya Savaşı'na giriş. Farklı cephelerde yaşanan yenilgiler.Talat Paşa anılarını, Mondros Mütarekesi'nin ardından yerleştiği Berlin'de, hem iktidarda yaptıklarını anlatmak için, hem de ona yöneltilen suçlamalara karşı kaleme almıştı.Talat Paşa'nın bu sıcak yıllara dair anıları, Nisan 1919'da İstanbul'da gıyabında görülen savaş suçları davasında avukatının yaptığı savunmayla biter.Paşa'nın, İngiliz Gizli İstihbarat Servisi çalışanlarından Aubrey Herbert'le, ölümünden bir buçuk ay önce yaptığı uzun söyleşi de, anıları bütünlemesi için kitabın ekinde yer alıyor."
        }
    ],

    [
        28,
        {
            "isbn": "978-9754582499",
            "title": "Hatıralar",
            "original-title": "Hatırat: 1913-1922",
            "original-language": "TR-OTA",
            "originally-published": 1922,
            "written-by": [
                { "name": "Cemal Paşa", "role": "Author" },
                { "name": "Alpay Kabacalı", "role": "Compiler" }
            ],
            "print-year": 2024,
            "genre": ["History", "Memoir"],
            "language": "TR",
            "publisher": "İş Bankası Kültür Yayınları",
            "edition": "16th",
            "summary": "23 Ocak 1913... İttihat ve Terakki'nin iktidarını pekiştiren Babıali Baskını'nın ertesinde, yeni sadrazam, Cemal Paşa'yı başkentin asayişini sağlaması için İstanbul Muhafızı olarak görevlendirir. Cemal Paşa, 1919'da yazdığı anılarını,memleketin umumi siyasetinde doğrudan doğruya etkili olmaya başladığı bu andan itibaren başlatmıştır. Hatıralar imparatorluğu yöneten üç büyük paşanın arasındaki hassas dengelere dair ipuçları sunarken, Cemal Paşa'nın baş aktörü olduğu pek çok tarihi olayı ilk ağızdan anlatıyor: Fransızlar ve Almanlarla ittifak çabaları, nüfus mübadelesi düşüncesinin doğuşu, I. Dünya Savaşı'na giriş, Gazze savunması, Arap isyanı, Suriye ve Filistin'in işgali... Cemal Paşa (1872-1922) 1895'te Harp Akademileri'ni bitirerek orduya katıldı. 1899'da Selanik'te, geleceğin Talat Paşa'sı ile birlikte İttihat ve Terakki'nin temellerini attı. Meşrutiyet'in ilanında İstanbul'a giden İttihat ve Terakki heyetine katıldı. 1909'da Adana valisi oldu. Balkan Savaşı'nda cephede görev yaptı. 1913'te kurulan İttihat ve Terakki hükümetinde, önce İstanbul Muhafızı, ardından da nafia (bayındırlık) ve bahriye nazırı oldu. Osmanlı-Fransız ittifakı için yaptığı girişimler sonuçsuz kaldı. I. Dünya Savaşı'nda Suriye ve Filistin'in güvenliğini sağlamak için yörede görevlendirildi. Onun komutası altında Mısır'ın işgali için düzenlenen Kanal Harekatları sonuçsuz kaldı. Yörenin İngiliz ve Fransız işgaline uğraması üzerine görevden alındı. Mondros Mütarekesi'nin ardından hükümet ve parti arkadaşlarıyla birlikte ülkeden ayrıldı. Almanya üzerinden, İngilizlerle mücadelede destek vermek üzere Afganistan'a geçti. Yöredeki dengelerin değişmesi üzerine Tiflis'e gitti. Burada Anadolu'ya geçmek için çalışırken, 21 Temmuz 1922'de iki Ermeni komitacının düzenlediği suikastte hayatını kaybetti; Erzurum'da Karskapısı Şehitliği'ne defnedildi."
        }
    ],

    [
        29,
        {
            "isbn": "978-9754580952",
            "title": "Atatürk, Okyar ve Çok Partili Türkiye: Fethi Okyar'ın Anıları",
            "original-title": "Atatürk, Okyar ve Çok Partili Türkiye: Fethi Okyar'ın Anıları",
            "original-language": "TR",
            "originally-published": 1997,
            "written-by": [
                { "name": "Fethi Okyar", "role": "Author" },
                { "name": "Osman Okyar", "role": "Compiler" },
                { "name": "Mehmet Seyitdanlıoğlu", "role": "Compiler" }
            ],
            "print-year": 2024,
            "genre": ["History", "Memoir"],
            "language": "TR",
            "publisher": "İş Bankası Kültür Yayınları",
            "edition": "10th",
            "summary": "Cumhuriyet döneminin çok partiliyönetim yolundaki ikinci denemesineilk elden bir bakış...Atatürk'ün yakın ve kadim dostuOkyar'ın kısa süren Serbest Fırkatecrübesine ilişkin anıları,yakın tarihimizin panoramasınıçiziyor. Bu kitap, parça parçasahip olduğumuz pek çokbilgiyi anlamlı ve derinlikli birtabloya dönüştürmemizi sağlıyor.İttihat ve Terakki fedailerinin düzenlediği Babıâli baskını, Enver ile Ali Fethi ve Mustafa Kemalarasındaki görüş ayrılıklarını nasıl ortaya çıkardı?Mustafa Kemal ile Ali Fethi'ninSofya'ya diplomatik görevleatanmalarının arkasında neleryatıyordu?Cumhuriyetin ilanının konuşulduğu28 Ekim gecesi Çankaya'yakimler davetliydi? Davetliolmayanların tepkisi ne oldu?Mustafa Kemal, Ali Fethi'yi partikurmaya nasıl ikna etti? SerbestFırka'nın adını kim koydu?Parti nasıl kapandı?Bunlar, kitapta cevaplanan sorulardan sadece bir kısmı...Ali Fethi Okyar (Pirlepe 1881 - İstanbul 1943) Manastır İdadisi ve Harp Okulu'nda Mustafa Kemal'le aynı dönemde okudu, 1900'de teğmen olarak askerlik hayatına başladı. Siyasetin hep içinde oldu, siyaset hayatı pek çok kez büyük krizlerle kesişti. 1912'de Meclis-i Mebusan'a seçildi. Meclis kapatılınca askerliğe döndü. Genel sekreter seçildiği İttihat ve Terakki'nin diğer yöneticilerine muhalif tutumundan dolayı 1913te Sofya'ya elçi atandı; Mustafa Kemal de askeri ataşe olarak aynı yerde görevlendirildi. 1917'de İstanbul milletvekili olarak siyasete döndü, içişleri bakanı oldu. İşgal döneminde tutuklanarak Malta'ya sürgün edildi. 1921'de yurda döndü, İstanbul milletvekili sıfatıyla Büyük Millet Meclisi'ne katıldı, bir yıl içişleri bakanlığı yaptı. Cumhuriyet'in ilanından sonra seçilen ilk meclis başkanıydı. 1924te başbakan ve milli savunma bakanı oldu. Şeyh Sait İsyanı sırasında istifa etti ve Paris'e büyükelçi olarak atandı. 1930'da çok partili sisteme geçmeyi isteyen Cumhurbaşkanı Mustafa Kemal'in teşvikiyle Serbest Fırka'yı kurdu. "
        }
    ],
    [
        30,
        {
            "isbn": "978-6053602842",
            "title": " Türk Mektupları: Kanuni Döneminde Bir Elçinin Gözlemleri",
            "original-title": "Legationis Turcicae Epistolae Quatuor",
            "original-language": "LA",
            "originally-published": 1595,
            "written-by": [
                { "name": "Ogier Ghiselin de Busbecq ", "role": "Author " },
                { "name": "Derin Türkömer ", "role": "Translator/Compiler" },
                { "name": "Melchior Lorichs", "role": "Pictures" }

            ],
            "print-year": 2024,
            "genre": [" History", "Memoir "],
            "language": " TR",
            "publisher": "İş Bankası Kültür Yayınları ",
            "edition": "11th ",
            "summary": "Türk Mektupları, Kanuni dönemindeki Osmanlı İmparatorluğunu tanımak ve anlamak isteyen Avrupalıların yüzyıllar boyunca başvurduğu bir kaynak eser…Başta İstanbul olmak üzere Osmanlı ülkesinin dört bucağında uzun zaman geçiren bir hümanistin keskin gözlem gücüyle kaleme aldığı benzersiz bir kaynak…Hürrem Sultanın entrikalarından Şehzade Mehmed ile Beyazıdın hazin sonlarına, Rüstem Paşanın rüşvetçiliğinden Yeniçerilerin ordugâh ve savaş düzenlerine, tantanalı alaylardan sokak hayvanlarına, Türk kadınlarının meziyetlerinden İstanbulluların hamam âdetlerine dek kayda geçtiği her konu, bir belgesel film kadar renkli ve bir öykü kadar akıcı… Üstelik Busbecqin heyetinde yer alan ressam MelchiorLorichsin aynı dönemde yaptığı çizimler, yüzyıllar sonra bu baskıda Türk Mektupları ile bir araya geliyor."
        }
    ],
    [
        31,
        {
            "isbn": "975-4100861 ",
            "title": " Rauf Orbay'ın Hatıraları: 1924-1945",
            "original-title": " Rauf Orbay'ın Hatıraları: 1924-1945",
            "original-language": "TR",
            "originally-published": 2005,
            "written-by": [
                { "name": " Rauf Orbay", "role": "Author " },
                { "name": "OSMAN SELİM KOCAHANOĞLU", "role": "Compiler" },
            ],
            "print-year": 2005,
            "genre": ["History ", "Memoir "],
            "language": " TR",
            "publisher": "Temel Yayınları ",
            "edition": "1th ",
            "summary": " Erzurum ve Sivas Kongrelerinde, Büyük Taarruz ve Lozan sırasında M. Kemal'in en yakınında bulunan Rauf Orbay; Milli Mücadele'nin önemli şahsiyetlerinden biridir. Lozan sonrasında Cumhuriyet kadrolarıyla anlaşmazlığa düşüp yollarını ayırmış; İzmir Suikasti nedeniyle de uzun yıllar yurt dışında yaşamak zorunda kalmıştır. Polemikten uzak sade bir üslupla kaleme alınan bu anıların, değişik versiyonları bulunmaktadır. Elinizdeki kitabın özelliği ise; eleştirel bir değerlendirme ve ilk defa Rauf Bey'in el yazısı mektuplarıyla sunuluyor olmasıdır. Literatüre Paşalar kavgası olarak gençen muhalif hareketin baş aktörü olan Rauf Bey'i daha yakından tanımak için, uzun bir yolculuğa çıkılmıştır"
        }
    ],
    [
        32,
        {
            "isbn": "978-9754584721 ",
            "title": " Geliboludan Kafkaslara: I. Dünya Savaşı Anılarım",
            "original-title": "Geliboludan Kafkaslara: I. Dünya Savaşı Anılarım ",
            "original-language": "TR ",
            "originally-published": 2003,
            "written-by": [
                { "name": " İbrahim Hakkı Sunata", "role": "Author " },
                { "name": "Kansu Şarman", "role": "Compiler" },
            ],
            "print-year": 2024,
            "genre": [" History", " Memoir"],
            "language": " TR",
            "publisher": "İş Bankası Kültür Yayınları ",
            "edition": " 7th",
            "summary": "Hukuk eğitiminin henüz ikinci yılında olan bir genç... Savaşmaktan, siperlerde gün geçirmekten, arkadaşlarının ölümü seyretmekten çok farklı idealleri var... Önündeki yıllara umutla bakıyor... Ne var ki bir gün savaş patlıyor, Osmanlı İmparatorluğu cehennemin göbeğinde buluyor kendini. Seferberlikle birlikte ''eli silah tutan''ların arasında Çanakkale Cepesi'ne doğru yollanıyor genç İsmail Hakkı Sunata. Kendisine son derece şaçma, vahşi ve insanlık dışı gelen bu savaşın içinde, belki de ''normal'' kalmayı başarabilmek için yazıyor, durmadan yazıyor. Önce Çanakkale, ardından Doğu Cephesi... ''Mülazım-ı Sanı Hakkı Efendi'', açlık, sefalet, acı ve çaresizlik dolu savaş yıllarını cephe içinde, kah siperden, kah ordugah yapılmış derme çatma köy odalarından, kah zeminliklerden bakarak anlatıyor.Gelibolu'dan Kafkaslara, her satırında savaşın dehşetini hissettiren, sorgulatan ve acıyla kavuran bir kitap. Sunata'nın günlükleini okurken, Birinci Dünya Savaşı'nın görünmeyen yüzüne yakından bakacak, savaşın soğuğunu ve insanın sıcağını iliklerinizde hissedeceksiniz. "
        }
    ],

    [
        33,
        {
            "isbn": "978-9754588156 ",
            "title": "Paris’te Bir Osmanlı Sefiri: Yirmisekiz Mehmet Çelebi'nin Fransa Seyahatnamesi ",
            "original-title": " Sefaretname-i Fransa",
            "original-language": "TR-OTA",
            "originally-published": 1866,
            "written-by": [
                { "name": " Yirmisekiz Mehmet Çelebi", "role": "Author " },
                { "name": "Şevket Rado", "role": "Compiler" },
            ],
            "print-year": 2024,
            "genre": ["History ", "Memoir "],
            "language": " TR",
            "publisher": " İş Bankası Kültür Yayınları",
            "edition": "17th ",
            "summary": "Haziran 1721/ Paris sosyetesi, kralı ve saraylıları bir kenara bırakıp yeni bir meraka düşmüştür: İİİ. Ahmetin XV. Louisye yolladığı elçi ve eşliğindeki heyetin iftar sofrası.Elçi Yirmisekiz Mehmet Çelebi ve heyeti, bu ilgiye yabancı değildir. Fransaya ayak bastıkları andan itibaren, halk onları seyretmek için geçtikleri yerlere akın etmektedir.Çelebi, Fransızların savaş meydanlarındaki izlenimler üzerinden yarattıkları Türk imgesini alt üst eder: Kültürü, yaşam tarzı, edebi bilgisi bu imgenin eksik kalan taraflarını bütünler.Ülkemizde Batı kültürüyle tanışmada öncü kabul edilen Çelebi, Avrupada Turquerienin yolunu açmış; bu akımla modadan mimariye, müzikten resme pek çok alanda Türk tarzı ürünler verilmiştir.18. yüzyılın kendine özgü ve duru dilinden Şevket Radonun yayına hazırladığı bu eser, Lale Devrinin kültür ve düşünce dünyasına ilk elden tanık olmamızı sağlıyor.Yirmisekiz Mehmet Çelebi (?1660ların sonu-1732) Edirnede doğdu. Asker olan babasının izinden giderek yeniçeri oldu ve ona lakabını kazandıran 28. Ortada idari görevler üstlendi. Başarıları sayesinde devletin üst düzey yönetiminde görevlere getirildi. Pasarofça Antlaşması müzakere heyetinde görevlendirildi. Burada Avrupalı diplomatlar üzerinde büyük bir etki yarattı. Bu sayede 1720-21de Pariste elçi olarak görev yaptı. Elçilik raporu olarak yazdığı bu metin, yazıldığından beri hem yerli hem yabancı pek çok çalışmaya konu olmuştur. Çelebi, Patrona Halil İsyanından sonra Kıbrıs valiliğine atanmış ve orada vefat etmiştir.  "
        }
    ],

    [
        34,
        {
            "isbn": "978-9944884655 ",
            "title": "Bir Sovyet Diplomatının Türkiye Anıları 1922-1923 ",
            "original-title": "Vospominaniya sovetskogo diplomata 1922-1923",
            "original-language": "RU ",
            "originally-published": 1960,
            "written-by": [
                { "name": "Semyon İvanoviç Aralov ", "role": "Author " },
                { "name": " Hasan Ali Ediz", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" History", " Memoir"],
            "language": " TR",
            "publisher": "İş Bankası Kültür Yayınları ",
            "edition": "11th ",
            "summary": " Kurtuluş Savaşı'nın en sıcak dönemlerinde, Samsun limanından Ankara'ya doğru bir diplomatik heyet yolculuk yapmaktadır. İşgalci Avrupa devletleriyle savaş halindeki Ankara Hükümeti'ni resmen ilk tanıyan ve ilk uluslararası antlaşmayı imzalayan Sovyet Rusya'nın elçilik heyeti. Heyetin başındaki Semyon Ivanoviç Aralov'un Türk milli mücadelesine henüz tanık olmadan duyduğu hayranlık, Ankara'da iyice artacaktı. *Baskı sayısı değişebilmektedir."
        }
    ],

    [

        35,
        {
            "isbn": "978-9752439641 ",
            "title": "Saraydan Hatıralar ",
            "original-title": " Saraydan Hatıralar ",
            "original-language": " TR",
            "originally-published": 2018,
            "written-by": [
                { "name": " İzzet Ziya", "role": "Author " },
                { "name": "Ali Birinci", "role": "Compiler" },
                { "name": "Yücel Yiğit", "role": "Compiler" },
            ],
            "print-year": 2018,
            "genre": [" History", " Memoir"],
            "language": " TR",
            "publisher": "Kopernik Kitap ",
            "edition": "1th ",
            "summary": "İzzet Ziya Bey (1883-1936), Meşrutiyet dönemi ressamlarından biridir. Sanayi-i Nefise Mektebinden mezun olmuş, resim eğitimi almış ve sarayda ressamlık yapmıştır. Diğer taraftan Mabeyin-i Hümâyûn Kitabetinde kâtip olarak görev yapmış, Ankara’da Meclisin açılmasıyla bu görevine son verilmiştir. Özel resim dersleri vererek hayatını sürdüren İzzet Ziya Bey, İstiklâl Harbinden sonra İktisat Vekâletinde yeniden memuriyete başlamış, bu arada vefatına kadar resimle ilgilenmeye devam etmiştir.İzzet Ziya Beyin Saraydan Hâtıralar adıyla ilk defa yayımlanacak olan bu kitabı, Sultan Reşat ve Sultan Vahdeddin dönemlerinde gerek ressam olarak gerekse memur olarak sarayda çalıştığı dönemde gördüğü, duyduğu ve bildiği olaylarla ilgili önemli bilgiler içermektedir. Şüphesiz hâtıralar sübjektif metinlerdir. İçerdiği bilgilerin doğruluğu araştırmaya tâbi tutulmalıdır. Ali Birinci ve Yücel Yiğit tarafından hazırlanan bu çalışma, araştırmayı teşvik etmesi, ilginç detaylar içermesi veya gözden kaçmış konulara değinmesi gibi sebeplerle tarih araştırmacıları için önemli bir kaynak eser olacaktır."
        }
    ],



    [
        36,
        {
            "isbn": "978-6050839210 ",
            "title": " Bir Doktorun Kurtuluş Savaşı Hatıraları",
            "original-title": "Bir Doktorun Kurtuluş Savaşı Hatıraları ",
            "original-language": " TR",
            "originally-published": 2021,
            "written-by": [
                { "name": " Doktor Muzaffer Alatur", "role": "Author " },
                { "name": "Selim Ahmetoğlu", "role": "Compiler" },
            ],
            "print-year": 2021,
            "genre": ["History ", " Memoir"],
            "language": "TR ",
            "publisher": " Timaş Yayınları",
            "edition": "1th ",
            "summary": "İngilizlerin şedid sansürüne binaen İstanbul gazetelerine Anadolu ve Rusya hakkında havadisler yazdırılmıyor, Anadolu ise havadis ihtiyacını Sivas'ta bırakılmış küçük bir telsiz telefon ajansıyla teskin ediyordu. Sivas telsiz ajansı Ankara'ya heyetiyle birlikte naklolunduğu zamanlara kadar Bolşevik ileri harekatı Mısır, Hind, İrlanda ihtilalleri Arabistan'daki birtakım imamların İngilizlere hücum ettiği haberleriyle vazifesini ifaya devam ediyordu.İstiklal Savaşı, Türk milletinin binlerce yıllık tarihinin en karanlık günlerini içeren mütareke döneminde Anadolu'nun bağrında filizlenen bir bağımsızlık ateşidir. Bir Doktorun Kurtuluş Savaşı Hatıraları adlı bu eser, Türk ordusunun bir ferdi olan Doktor Muzaffer Alatur'un gözünden bu dönemi tüm detaylarıyla önümüze seriyor. Ayrıca Milli Mücadele döneminde Türk milletinin içine düştüğü girdabı, işgaller karşısındaki tutumunu, Kuva-yı Milliye'nin teşkilatlanma sürecini, bu süreçte yaşanan sıkıntıları, düzenli ordunun kurulmasını ve Yunan ordusuna karşı adım adım verilen mücadeleyi ele alıyor. 26 Ağustos 1922 sabahı topçu birliklerinin ateşiyle kopan Türk fırtınasının, son Yunan askerinin 9 Eylülde Anadolu topraklarını terk etmesiyle dinmesine kadar geçen süreci tanığının gözünden anlatan bu çalışma, modern Türkiye tarihine çok önemli bir katkı sağlıyor.Bir doktorun arşivde saklı kalmış defterinin izinde, Kurtuluş Savaşının aradan 100 yıl geçse de eskimeyen hikayesine tanıklık edeceksiniz "
        }
    ],

    [
        37,
        {
            "isbn": " 978-9757013020",
            "title": "Batı Notları ",
            "original-title": " Batı Notları",
            "original-language": "TR ",
            "originally-published": 1972,
            "written-by": [
                { "name": " Nuri Pakdil", "role": "Author " },

            ],
            "print-year": 2024,
            "genre": [" History", " Memoir"],
            "language": "TR",
            "publisher": " Edebiyat Dergisi Yayınları",
            "edition": "13th ",
            "summary": "Batı'ya dair tespitlerin yapıldığı bir kitap 'Batı Notları'; iyiki okudum diyorum. Yazarın daha kitabın başında kurduğu şu cümle özet mahiyetindeydi: Ama öykünmekle, inançları davranışları farklı uluslara göre düzenlenmiş kurumları almakla, onların aynısını kurmakla, ulusal birleşime varmak mümkün müydü? Batı bu kadar samimi bir şekilde, ancak bu kadar güzel yazılabilirdi. Bir dostumdan dinliyormuş gibi okudum Batı Notları'nı. / Ayşegül Toprak.. Batı Notları, Nuri Pakdilin Paris, Brüksel ve Romaya yaptığı gezinin notlarını içeriyor. Batı Notlarında Nuri Pakdil, tarih bilincine sahip Müslüman bir yazarın bakışıyla Batıyı, Batı toplumlarını eleştirel bir gözleme tabi tutuyor.Sunuş yazısında, şöyle deniyor: Yalnızca izlenimlerimi değil, Batı'nın bende yaptığı çağrışımları da yazdım. Şunu da belirteyim: Bilinen gerçeklere yeni bir şey eklenmedi. Ama bunlarla, uygarlık sorunlarımıza az çok değiniliyorsa, bu gerçeklerin sürekli yazılması ve üzerinde düşünülmesi zorunludur."
        }
    ],

    [
        38,
        {
            "isbn": " ",
            "title": "Hatıra Notları : 1916 ",
            "original-title": " Hatıra Notları : 1916",
            "original-language": "TR ",
            "originally-published": 2018,
            "written-by": [
                { "name": "Mustafa Kemal Atatürk  ", "role": "Author " },
                { "name": "Hakan Türkkan", "role": "Compiler" },
            ],
            "print-year": 2020,
            "genre": ["History ", " Memoir"],
            "language": " TR",
            "publisher": " Kopernik Kitap",
            "edition": "3th ",
            "summary": "18 Kasım 1916: Öğleden önce saat 10.00'da eş-Şeyhu't-Tani el-Halidi Muhammed en-Nakşibendi-i Küfrevinin Kızılmescit'teki türbesini ziyaret ettim. Küçük bir türbe. Şeyhin kabri ve yanında kardeşinin oğlu olduğunu türbedarın ifade ettiği bir zatın kabri vardır. Şeyhin kabrinin örtüsü sırma işlemeli, elmas, yakut gibi taşlarla süslü (Bu taşların elmas, yakut, zeberced / zümrüt olduğunu türbedar söylemişse de gerçek olmasa gerek). Diğer kabir de sırma işlemeli örtülü. Bu türbeye Ruslar ilişmemiş. Türbelerin kapıları gümüş ve altın kakma. Kıymetli halılar var fakat çoğu çürümüş. Bu türbeyi Sultan Hamid yaptırmış. Daha sonra Bitlis'in daha bir iki harap türbe gibi yerlerini gördükten sonra konutuma dönüş.Mustafa Kemal Atatürk'ün Doğu Cephesinde (Diyarbakır, Siirt) görevli iken bizzat kendi el yazısıyla kaydettiği Hatıra Notları hem tarih bilimi açısından hem de Türk milleti açısından son derece değerlidir. Bu çalışma, Atatürk'ün daha sonra genişletmek üzere aldığı notlardan oluşmaktadır. Günlük tarzında olmasına rağmen günlük üslubuyla kaleme alınmamıştır. 7 Kasım 1916'da başlayan notlar 25 Aralık 1916 tarihli yarım bir bölümle bitmektedir. Dolayısıyla yaklaşık iki aylık bir süreyi kapsamaktadır. "
        }
    ],

    [
        39,
        {
            "isbn": "978-6257746397 ",
            "title": " Rumeli Orduları Başkumandanı Süleyman Hüsnü Paşa'nın 93 Osmanlı-Rus Harbi Hatıraları ",
            "original-title": " Umdetü’l-Hakaik",
            "original-language": "TR-OTA ",
            "originally-published": 1910,
            "written-by": [
                { "name": "Süleyman Hüsnü Paşa ", "role": "Author " },
                { "name": "Ebubekir Subaşı", "role": "Compiler" },
            ],
            "print-year": 2021,
            "genre": ["History ", " Memoir"],
            "language": " TR",
            "publisher": " Çelik Yayınları",
            "edition": "1th ",
            "summary": "Tarihin her devirde meşhur olarak bilinen ve hatta ezberletilmiş olan kahramanlar vardır. Bunlar daha ortaya çıkışlarından itibaren zihinlere yerleştirilir ve artık değişmez gibi görünürler.Oysa işin aslını ve ne olduğunu araştıranların böyle bir peşinciliğe kapılama lüksleri yoktur. Hal böyle olunca tarihin gölgede kalmış gerçek kahramanları, çekilmiş oldukları sessiz köşelerinde, sanki o kadir kıymet bilenleri hep bekler, dururlar.Süleyman Paşa da o gerçek kahramanlardan biridir. Tıpkı bir hazine gibi toprak altında gizlenmiş, keşfedileceği güne muntazırdır. Bu hazine yer yüzünde parlayarak kendini gösterince onun yerini gaspla almış olan sahte kahramanlar da ortaya çıkacaktır.İşte bu eser, büyük bir savaş esnasında, yaman siyasî entrikaların nasıl çevrilebileceğini gösteren bir ibret vesikasıdır. Eser, Süleyman Hüsnü Paşa’nın şahsında; Rus, Sırp ve Bulgar’ın da gerçekte kim ve ne olduğunu bir kere daha gözler önüne serecek, gerçek kimliklerini ortaya çıkaracaktır.Bizler, Süleyman Hüsnü Paşa’nın 93 Harbi’ne dair kaleme aldığı bu risalesinin hem orijinal nüshasını hem de Türkçeye sadeleştirilmiş halini neşrederek bir “Hatırat Dizisi” başlatmış bulunuyoruz. Duamız ve gayretimiz, kıymetli şahsiyetleri biraz daha yakından tanıma, üzerimizdeki haklarını bir nebze olsun ödemeye gayret etme yönündedir."
        }
    ],

    [
        40,
        {
            "isbn": " ",
            "title": " Karlsbad'da Geçen Günlerim",
            "original-title": " M. Kemal Atatürk'ün Karlsbad Hatıraları",
            "original-language": "TR ",
            "originally-published": 1983,
            "written-by": [
                { "name": " Mustafa Kemal Atatürk", "role": "Author " },
                { "name": "Selma Günaydın", "role": "Compiler" },
            ],
            "print-year": 2018,
            "genre": ["History ", " Memoir"],
            "language": " TR",
            "publisher": " Kopernik Kitap",
            "edition": "2th ",
            "summary": " 2 Temmuz Salı - (...) Almanların bize memleketimizi İngiliz istilasından kurtarmada, yardımlarının derecesini mantıken meydana çıkarabiliriz. Benim bu hususta daima olumsuz sonuca varan kanaatlerim, Veliaht Hazretleri ile vuku bulan seyahatimiz münasebetiyle gerek İmparator ve gerek Hindenburg ve Ludendorf'la olan görüşmelerle pekişmiştir.Bir devlet adamı, kendi insani hislerine tabi olarak devlet meselelerini halledemez, o salahiyete sahip değildir. Memleket, kimsenin malikanesi değildir. Yalnız, biz Türkler memleket ve milletin idaresini elimize aldığımız zaman, kendi şahsi davranışlarımızdaki cömertliği, devlet meselelerinin ecnebilerle hallinde düstur ediniyor, bir çocuk gibi aldanıyoruz.1931 yılındaki tarih çalışmaları esnasından Çankaya'daki eski köşkün kütüphanesinde bulunan bu hatırat, bizzat Mustafa Kemal Atatürk tarafından altı deftere kaydedilmiş günlüklerden oluşmaktadır. Atatürk'ün Karlsbad'da Geçen Günlerim şeklinde isimlendirdiği her haliyle ilgi çekici bu metinler, Mustafa Kemalin Karlsbadda geçen günlerini, o günlerde bazı toplumsal meselelere bakışını, okuduğu bazı kitapları ve daha birçok hususta önemli, dikkat çekici ayrıntıları içeriyor."
        }
    ],

    [
        41,
        {
            "isbn": " 978-6257706636",
            "title": " Siyasi Hatıralarım: 1908-1913 Meşrutiyet Yılları ",
            "original-title": "Şeyhülislâm Merhum Cemâleddin Efendi Hazretlerinin Hâtırât-ı Siyâsiyyesi ",
            "original-language": " TR-OTA",
            "originally-published": 1920,
            "written-by": [
                { "name": "Şeyhülislam Cemaleddin Efendi ", "role": "Author " },
                { "name": "Recep Yılmaz", "role": "Compiler" },
            ],
            "print-year": 2021,
            "genre": ["History ", "Memoir "],
            "language": " TR",
            "publisher": " Kapı Yayınları",
            "edition": "1th ",
            "summary": " Adım adım sonuna yaklaşan bir İmparatorluk.En zor dönemde Saray ve bürokrasi arasında yaşanan çekişmeler ve bu çekişmelerin ortasında kalan millet.En kritik bölgelerde yaşanan toprak kayıpları, bir dünya savaşının ürkütücü ayak sesleri.Böylesine çalkantılı bir siyasi atmosfer ve bu atmosferin tam ortasında bir Şeyhülislam.Cemaleddin Efendi.Kamuoyu kendisini Yıldız Suikasti hadisesinde, Sultan II. Abdülhamid'i rutin dışı bir şekilde meşgul ederek, bilmeden de olsa ölümden kurtarmasıyla tanır.O, Abdülhamid'in bürokrasiye nüfuz etmeye başladığı ve giderek güçlendiği bir dönemde Şeyhülislamlık makamına oturmuş, kendisinin sadık bir taraftarı olarak tahttan indirildiği güne kadar da görevine devam etmiş önemli bir bürokrattır.Ülkedeki siyasi çekişme, Meşrutiyet'in yeniden ilanı, Abdülhamid'in tahttan indirilişi, İttihat ve Terakki idaresinde ülkenin her bakımdan kabuk değiştirmesi ile sonuçlanır. Hatıratında yazdıklarından anlaşıldığına göre, Şeyhülislam Cemaleddin Efendi de Meşruti yönetimin taraftarıdır, ancak bu yönetim biçimini kabul ettiren İttihatçı kadrolarla arasında ciddi görüş ayrılıkları bulunmaktadır. Buna rağmen Abdülhamid sonrasında kesintili de olsa makamında oturmaya devam eder. Cemaleddin Efendi, İmparatorluğun acı sonunun yaşandığı bu günleri anbean not eder, sonra Meşrutiyet dönemi hatıraları olarak yayınlar. Elinizdeki çalışma, onun bu hatıralarının günümüz Türkçesiyle neşredilmesinin ötesinde, notlar ve açıklamalarla zenginleştirilmiş ve sonuna da döneme ilişkin, kitapta bahsedilen kişi ve olaylara ait fotoğraf albümüyle süslenmiştir. İnsanlar ölür, olaylar unutulur fakat tarih hep devam eder."
        }
    ],

    [
        42,
        {
            "isbn": "978-6258096859 ",
            "title": "Görüp İşittiklerim ",
            "original-title": "Görüp İşittiklerim  ",
            "original-language": "TR ",
            "originally-published": 1949,
            "written-by": [
                { "name": " Ali Fuad Türkgeldi ", "role": "Author " },
                { "name": "Muhammet Özdemir", "role": "Compiler" },
            ],
            "print-year": 2023,
            "genre": ["History ", "Memoir "],
            "language": " TR",
            "publisher": " Kapı Yayınları",
            "edition": "1th ",
            "summary": " Ali Fuad Türkgeldi (1867-1935), Osmanlı Devleti'nin son dönemlerinde saray çevresinde olan bitenlere yakından şahitlik etmiş ve yaşananlar hakkında önemli bilgiler bırakmış olan bir tarihçi ve devlet adamıdır. Elinizdeki eserde Türkgeldi'nin Meşrutiyet'ten iki ay sonra Sadaret Mektupçuluğu'na tayin edilmesinden, Mabeyn Başkatipliği görevinden ayrılıncaya kadar tanık olduğu önemli olayları bulacaksınız. Bab-ı Ali baskınından Balkan savaşlarına, İzmir'in işgalinden Sultan Vahideddin ve Reşad hakkındaki gözlemlere uzanan bu hatırat, tarihçiler ve tarih severler için kaynak bir eser mahiyetinde."
        }
    ],

    [
        43,
        {
            "isbn": " 978-6257706148",
            "title": "II. Abdülhamid ve Yıldız Hatıraları",
            "original-title": "II. Abdülhamid ve Yıldız Hatıraları ",
            "original-language": " TR-OTA ",
            "originally-published": 1931,
            "written-by": [
                { "name": "Mabeyn Başkatibi Tahsin Paşa ", "role": "Author " },

            ],
            "print-year": 2023,
            "genre": [" History", "Memoir "],
            "language": " TR",
            "publisher": "Kapı Yayınları",
            "edition": "2th ",
            "summary": "Sultan II. Abdülhamid.33 yıl sürmüş bir hükümranlık.Çok yönlü bir padişah olmasının yanında bir o kadar da eleştirilen bir insan.Hakkında serinkanlı değerlendirmeler yapmak ise oldukça güç. Bir yandan kutsanırken bir yandan kıyasıya eleştiriliyor bugün bile. Kızıl Sultan ile Ulu Hakan sıfatları arasında parlayan bir 'yıldız' o. Ve Tahsin Paşa, 1894-1908 yılları arasında Yıldız Sarayı'nda Mabeyn Başkatipliği görevinde bulunmuş, Osmanlı son döneminin en önemli bürokratlarından ve Sultan II. Abdülhamid'e en yakın isimlerden biridir. Cumhuriyet'in ilk yıllarında kaleme aldığı hatıratı, Milliyet gazetesi tarafından tefrika edilmiş, daha sonra da kitap olarak yayınlanmış ve epey ses getirmiştir. Ancak gerek tefrika edilirken, gerekse kitaplaşma safhasında ortaya çıkan okuma/yazma hataları esere kısmen gölge düşürmüştür. Elinizdeki kitap ciddi bir metin tadilatı görmüş ve sahih bir hale gelmiştir.Kendisi de tartışmalı bir tarihsel şahsiyet olan Tahsin Paşa'nın, yine bir diğer tartışmalı isim olan Sultan II. Abdülhamid'i merkeze alarak yazdığı bu hatıralar, dönemi daha iyi anlamaya katkı sağlayacak niteliğiyle hala kıymetli. "
        }
    ],

    [
        44,
        {
            "isbn": " 978-6057635105",
            "title": "İstiklal Harbimizde Enver Paşa ve İttihat ve Terakki Erkanı ",
            "original-title": " ",
            "original-language": "TR ",
            "originally-published": 1990,
            "written-by": [
                { "name": " Kazım Karabekir", "role": "Author " },
                { "name": "Erhan Çifçi", "role": "Compiler" },
            ],
            "print-year": 2024,
            "genre": [" History ", "Memoir "],
            "language": " TR",
            "publisher": " Kronik Kitap",
            "edition": "8th ",
            "summary": "İstiklal Harbi, İttihat ve Terakki Erkanı ve Enver Paşa'nın Faaliyetleri.İstiklal Harbi'nde Enver Paşa etrafında dahi hayli entrikalar çevrildi. Vesikalar ile görülecektir ki bütün bu işlerde harici eller, milli harekatımızı muvaffakiyetsizliğe sürüklemek için müthiş [oyunlar] oynamışlardır.Kazım Karabekir, Türk tarihinin en dirayetli ve ferasetli askerlerinden biri olan Kazım Karabekir, yalnız cephe hattındaki mücadelesiyle değil yazdığı eserlerle de ses getirmiş isimlerden biridir.'Hayatım' adlı eserinde çocukluk ve ilk gençlik yıllarında tanık olduğu olayları anlatan Karabekir, 'İttihat ve Terakki Cemiyeti' adlı eserinde de Osmanlı İmparatorluğunun son dönemine damga vuran İttihat ve Terakki Cemiyeti'nin kuruluş ve yükseliş sürecinde yaşananları gözler önüne sermiştir.İstiklal Harbimizde Enver Paşa ve İttihat ve Terakki Erkanı adıyla yayınladığımız bu üçüncü eserinde ise Karabekir, İttihat ve Terakki'nin lider kadrosu ile Enver Paşa'nın Milli Mücadele dönemindeki söylem ve eylemlerini ele almaktadır.Mütareke sonrasındaki vaziyetin izahıyla başlayan kitap, İttihatçı liderlerin ülke dışına çıktıktan sonraki faaliyetleri ve bu faaliyetler karşısında Ankara Hükumeti'nin tavrı üzerinde duruyor. Kitapta Enver Paşa'yı merkez alan bir anlatım üslubu benimseyen Karabekir, bununla beraber, aynı dönemde yurt içinde yaşananları da kilit isimler üzerinden okuyuculara aktarıyor. Kitap, Karabekir'in Anadolu'ya geçme imkanı bulamayan Enver Paşa'nın ölümüne kadar yaşadıkları hakkındaki tespitleriyle son buluyor.İstiklal Harbimizde Enver Paşa ve İttihat ve Terakki Erkanı, olayları adım adım izleyen ve yüksek analiz becerisiyle yorumlayan Kazım Karabekir Paşa'nın elinden çıkmış değerli bir kaynak."
        }
    ],

    [
        45,
        {
            "isbn": "978-9750808754 ",
            "title": " Frankfurt Seyahatnâmesi",
            "original-title": " ",
            "original-language": "TR-OTA ",
            "originally-published": 1933,
            "written-by": [
                { "name": " Ahmet Haşim", "role": "Author " },
                { "name": "Nuri Sağlam", "role": "Compiler" },
            ],
            "print-year": 2023,
            "genre": ["Travelogue ", "History"],
            "language": " TR",
            "publisher": " Yapı Kredi Yayınları",
            "edition": "10th ",
            "summary": "1930ların Almanyasına, tedavi için bu ülkeye gelmiş bir Türk aydınının Frankfurt penceresinden bakışlarını içeren bu küçük kitap deneme tadıyla da okunacak 20 kısa yazıdan oluşuyor.Üsküdarı seyrederek sıkıntılı bir halde Sirkeciden trenle yola çıkan Hâşim, Balkanları, Orta Avrupa düzlüklerini aşarak Frankfurta ulaşır. Bu eski Alman şehrinin İİ. Dünya Savaşı öncesi durumunu türlü yönlerden betimleyen Frankfurt Seyahatnâmesi, gazete ve dergi sayfalarından aktarılırken yapılan değişiklikleri de gösterecek biçimde yeniden ele alındı.Ahmet Hâşimin diğer eserleri de aynı yöntemle basıma hazırlanıyor."
        }
    ],

    [
        46,
        {
            "isbn": " 978-9750522345",
            "title": "Salâhattin Köseoğlu'nun Milli Mücadele Hatıraları ",
            "original-title": " ",
            "original-language": " TR",
            "originally-published": "N/A",
            "written-by": [
                { "name": " Prof. Dr. Ahmet Demirel", "role": "Author " },
                { "name": "yaz", "role": "Translator/Compiler" },
            ],
            "print-year": 2017,
            "genre": ["History", "Memoir "],
            "language": "TR ",
            "publisher": " İletişim Yayınları",
            "edition": "1th ",
            "summary": "Salâhattin Köseoğlu bir Osmanlı subayı olarak başladığı askerlik hayatını Balkan, Çanakkale savaşlarıyla, Kafkas-Doğu Cephesi kumandanlığıyla sürdürdü. Mütareke döneminde Anadolu’ya ilk geçenlerdendir. Merkezi Sivas’ta bulunan Üçüncü Kolordu’nun Kumandanlığına getirildi ve Kazım Karabekir’in On beşinci, Ali Fuat Cebesoy’un Yirminci Kolordusuyla birlikte Anadolu hareketinin dayandığı başlıca askerî birliklerden birini yönetti. Kolordusuyla birlikte Sivas Kongresi’nin güven içinde yapılmasını sağladı. 1920’de kolordusu lağvedilip Merkez Ordusu’na dönüştürülünce, Aralık 1920-Nisan 1923 arasında Birinci Meclis’in çalışmalarına Mersin milletvekili olarak katıldı. İkinci Grup’un kurucuları arasında yer aldı. Meclis’in üstünlüğü, başkumandanlık kanunu, seçim kanunu, temel hak ve özgürlükler ile İstiklal Mahkemeleri konusunda Birinci Meclis’te muhalefetin en önemli simalarından biri oldu. Nisan 1923’te kurulan İkinci Meclis’e katılmadı. "
        }
    ],

    [
        47,
        {
            "isbn": "978-6258094510 ",
            "title": "Hâtıra-i Âtıf ",
            "original-title": " ",
            "original-language": " TR-OTA",
            "originally-published": "N/A",
            "written-by": [
                { "name": "İbnülemin Mahmud Kemal İnal", "role": "Author " },
                { "name": "Nurettin Gemici, Hikmet Toker", "role": "Compiler" },
            ],
            "print-year": 2022,
            "genre": [" History", " Memoir"],
            "language": "TR ",
            "publisher": "KETEBE ",
            "edition": "1th ",
            "summary": " Hâtıra-i Âtıf, Osmanlı siyasi tarihinin en uzun yüzyılı olarak da tarif edilen 19. asırda, Sultan Abdülmecid’le birlikte başlayan fırtınalı dönemde yaşanan hadiselere dair mâbeyn başkâtibi görevini üstlenmiş önemli bir zatın, Mehmed Âtıf Bey’in tespitlerinden oluşmaktadır. Eserin istinsahını İbnülemin Mahmud Kemal, babası Mehmed Emin Paşa ve kardeşi Ahmed Tevfik gerçekleştirmiştir. Eserin, gerek müellifin Horhor Mahallesi’ndeki evinde gerekse İbnülemin Mahmud Kemal’in Beyazıt’taki Sarı Köşk olarak bilinen evinde yapılan sohbetler esnasında dile getirilen ve bilinen yazılı kaynaklarda geçmeyen ve rastlanması pek de mümkün olmayan anekdot ve hatıraların kayda alınması arzusu sonrası ortaya çıktığı söylenebilir. Hiçbir yerde duymadığı ve duyamayacağı malumatlar karşısında heyecana kapılan ve anlatılanları bir yere kaydetmeyi arzu eden İbnülemin’in de ısrarıyla Mehmed Âtıf Bey, kendisinin şifahen aktardığı bilgilerin kaleme alınmasına müsaade etmiştir.Osmanlı’nın son dönemini saraylı birinden, bir mâbeyn başkâtibinden ve İbnülemin’in ilaveleriyle okumak, kaynaklarda yer almayan bilgilere erişmek isteyenler için paha biçilmez bir eser: Hâtıra-i Âtıf. "
        }
    ],

    [
        48,
        {
            "isbn": "978-9752560239  ",
            "title": "Milli Mücadele Hatıralarım ",
            "original-title": " ",
            "original-language": " TR",
            "originally-published": 1957,
            "written-by": [
                { "name": "İlyas Sami Kalkavanoğlu  ", "role": "Author" },
                { "name": "", "role": "Translator/Compiler" },
            ],
            "print-year": 2011,
            "genre": [" History", " Memoir"],
            "language": " TR",
            "publisher": " Kaknüs Yayınları",
            "edition": "1th ",
            "summary": "Mondros Mütarekesi'nin imzalanmasından sonra Osmanlı topraklarına yönelik işgaller başlar. Başta İngilizler olmak üzere, farklı ülkeler hesabına çalışan Rum, Ermeni ve diğer etnik gruplardan oluşan çeteler, bölgede bölücü faaliyetlere girişirler. Bunun üzerine, Osmanlı ordusundan terhis edilen askerler, vatansever siviller ve çetelerin faaliyetlerinden usanmış olan Anadolu'nun cefakâr halkı, bölücü çetelerle mücadele etmek için bir araya gelir. Millî Mücadele kuvvetlerinin; İstanbul-Anadolu bağlantısının açık tutulmasını sağlamak suretiyle İstanbul'dan kaçırılan silah, cephane ve harp malzemelerini Anadolu'ya aktarmak ve Anadolu'ya geçecek olan mebus, subay, idari amir vb. kişilerin salimen Anadolu'ya ulaşmalarını sağlamak gibi önemli görevleri vardır.Elinizdeki bu kitap, mütevazı bir vatanperverin, Millî Mücadele'den 35 yıl sonra, vatanına ikinci bir hizmet olarak kaleme aldığı hatıralarıdır. İşgal öncesinde İstanbul'da fındık ticaretiyle uğraşan İlyas Sami Kalkavanoğlu, vatanı uğruna her şeyi bırakıp Millî Mücadele'ye katılmıştır. Kurtuluş Savaşı sonrasında, kendisine hizmetlerinden dolayı Milis Yüzbaşılık rütbesi layık görülmüştür. Üst düzey yöneticilerden makam, mal, mülk teklif edildiğinde ise 'biz bunları vatan için yaptık' diyerek reddetmiştir.İlk baskısı 1957'de yayımlanan buy hatırat, Kurtuluş Savaşı üzerine yapılan birçok araştırmada kaynak gösterilmiştir. "
        }
    ],
    [
        49,
        {
            "isbn": " 978-9755745343",
            "title": "Timur’un Günlüğü: Tüzükat-ı Timur  ",
            "original-title": "Tüzükat-ı Timur ",
            "original-language": "FA ",
            "originally-published": 1636,
            "written-by": [
                { "name": " Emir Timur", "role": "Author " },
                { "name": "Sahibkıran Emir Timur, Muhammed Tarağay Bahadıroğlu ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": ["History ", " Memoir"],
            "language": " TR",
            "publisher": "İnsan Yayınları",
            "edition": " 9th",
            "summary": "Bu kitap Timur’un kendi ağzından saltanat mücadelesini, orduyu ve devleti yönetme ilkelerini, toplum görüşünü, din anlayışını, felsefesini ve kişisel ideallerini anlatır. Bu eserin “Melfuzât” denen kısmında Timur, ilk saltanat kavgasından son Ankara Savaşı’na kadar gerçekleşen olayları kendi perspektifinden otuz bir fasıl (kengeş) içinde hikâye eder. Eserin ikinci bölümü olan “Tüzükât” kısmında ise, devlet kurma ve yönetme ilkeleri ve onun uygulamalarını ortaya koyar.Tüzükât sadece bir tarih eseri değildir; aynı zamanda Timur’un başarılı bir asker, bir devlet adamı ve bir lider olarak temel ilkelerini içeren bir rehber kitaptır. Onun, iyi tetkik edildiğinde hayatta öncü olmak isteyen müteşebbis, işadamı, yönetici, siyasetçi ve aile reisi gibi herkesin prensip edinebileceği ilkeleri içerdiği görülür. Timur bu kitapta başarısının sırlarını vermekte ve sağlam bir devlet kurabilmenin esaslarını ortaya koymaktadır. Bu bakımdan Tüzükât, adalet esaslı bir devlet oluşumunda esaslı rol oynayacak düşünceye kaynaklık edecektir "
        }
    ],
    [
        50,
        {
            "isbn": "  978-9752430891",
            "title": "Hayatım ",
            "original-title": " ",
            "original-language": " TR-OTA",
            "originally-published": 1995,
            "written-by": [
                { "name": " KÂZIM KARABEKİR", "role": "Author " },
                { "name": "Erhan Çifci", "role": "Compiler" },
            ],
            "print-year": 2024,
            "genre": ["Autobiography", " Memoir", "History "],
            "language": "TR ",
            "publisher": " Kronik Kitap ",
            "edition": " 9th",
            "summary": "Herkesin hayatı, mükemmel bir tarih parçasıdır. Hele çocukların ibret alacağı güzel bir kitaptır. Şahsının ehemmiyetine göre böyle bir kitap bütün vatan evlatlarının da istifade edebileceği hakiki bir rehber olabilir. Ne idik, ne olduk? Mutlak bilinmelidir” şiarını benimseyen Karabekir Paşa, bu eseriyle birlikte 1882-1907 yılları arasındaki süreci, yani yaşamının ilk 25 yılında tanık olduğu her şeyi aktarıyor.Askerî tarihçi – yazar Erhan Çifci’nin editoryal katkılarıyla yayına hazırladığı bu eser, Kâzım Karabekir’in yaşadıklarını yazma sebebiyle başlar, ailesi ve eğitim süreciyle birlikte tanıdığı insanları ve gördüğü şehirleri anlatmasıyla devam eder. Oldukça objektif biçimde ele aldığı konular arasında askerî ve siyasi başarılar kadar başarısızlıklar da geniş yer bulmaktadır. Onun fikirleri günümüzde de önemini korumaktadır ve bazı çıkış yolları için kapı aralamaktadır.'Hayatım', bir paşanın bir imparatorluğun en zor zamanlarını kaydetmesi sebebiyle kaynak niteliği taşımaktadır. "
        }
    ],
    [
        51,
        {
            "isbn": "978-9752430952 ",
            "title": " İTTİHAT VE TERAKKİ CEMİYETİ ",
            "original-title": " ",
            "original-language": "TR-OTA",
            "originally-published": 1982,
            "written-by": [
                { "name": " KÂZIM KARABEKİR", "role": "Author " },
                { "name": "Erhan Çifçi", "role": "Compiler" },
            ],
            "print-year": 2024,
            "genre": [" History", "Politics "],
            "language": "TR ",
            "publisher": " Kronik Kitap",
            "edition": "9th ",
            "summary": "…Vatanseverlerin yıllardan beri ruhuna sinmiş olan hürriyet duyguları bir ideal halinde yeniden tebellür etmiş [açığa çıkmış] ve milletin faal, fikirli, fedakâr, faziletli ve feragatli evlatlarını büyük bir hızla birbirine bağlayarak tehlikenin karşısına dikmiştir. İşte bu kaynaşma neticesinde memleketin hakiki sahibinin sadece padişah ve bendeleri değil, onu kanı pahasına kazanan ve korumaya çalışan millet olduğunu fiiliyat sahasında ispat etmek maksadıyla kurulan cemiyet İttihat ve Terakki’dir.” Kâzım Karabekir- Türk askerî ve siyasi tarihinin unutulmaz şahsiyetlerinden biri olan Kâzım Karabekir’e dair serimiz, yine kendisinin kaleme aldığı kaynak bir eserle devam ediyor. 66 yıllık ömrü boyunca kritik dönemlerde en hassas olayların içerisinde yer alan Kâzım Karabekir, Osmanlı İmparatorluğu’nun son yıllarına damga vuran İttihat ve Terakki Cemiyeti’nin tarihine ışık tutuyor "
        }
    ],
    [
        52,
        {
            "isbn": "978-9750816895 ",
            "title": "Günlükler (1906-1948) I. Cilt ",
            "original-title": " ",
            "original-language": " TR-OTA",
            "originally-published": 2009,
            "written-by": [
                { "name": " KÂZIM KARABEKİR", "role": "Author " },
                { "name": "Yücel Demirel", "role": "Compiler" },
            ],
            "print-year": 2024,
            "genre": ["Memoir ", "History "],
            "language": " TR",
            "publisher": " Yapı Kredi Yayınları",
            "edition": " 3th",
            "summary": "Günlükler kitabı ile Kâzım Karabekir Paşa’nın hayatını, günü gününe tuttuğu notlarla kamuoyunun bilgisine sunmaktayız. Paşa’nın vefatından hemen sonra eşi İclal Hanım’ın son cümleyi yazdığı günün üzerinden 61 yıl geçti. Bu süre zarfında Kâzım Karabekir hakkında çok yazı yazıldı, çok söz söylendi.Yazılanlarla söylenenlerin bir kısmı gerçeği ortaya koyarken, bir bölümü de Karabekir’in fikir ve eylemlerini çeşitli sebeplerle doğru olarak yansıtmadı.Osmanlı Devletinin en zor döneminde yetişmiş, İttihat ve Terakki Cemiyeti’nin kuruluşunda yer almış, ancak Cemiyet Meşrutiyet’in ilânından sonra parti haline geldiğinde ortaya çıkan yanlışlıkları görmüş; Milli Mücadele’nin ilk zaferini kazanmış, Doğu cephesindeki başarılarından sonra elindeki askeri güç ile Batıya destek olmuş; Cumhuriyet’in  kurulmasıyla birlikte devrimlerin halka benimsetilmesi konusunda hassasiyet göstermiş, devlet yönetiminde istibdada her zaman karşı çıkmış olan Kâzım Karabekir Paşa’nın kendisi için tuttuğu bu notlar incelendiğinde, geniş bir dönemi kapsayan çok önemli olaylara tanık olunacaktır. "
        }
    ],
    [
        53,
        {
            "isbn": "978-9750816895 ",
            "title": "Günlükler (1906-1948) II. Cilt ",
            "original-title": " ",
            "original-language": " TR-OTA",
            "originally-published": 2009,
            "written-by": [
                { "name": " KÂZIM KARABEKİR", "role": "Author " },
                { "name": "Yücel Demirel", "role": "Compiler" },
            ],
            "print-year": 2024,
            "genre": ["Memoir ", "History "],
            "language": " TR",
            "publisher": " Yapı Kredi Yayınları",
            "edition": " 3th",
            "summary": "Günlükler kitabı ile Kâzım Karabekir Paşa’nın hayatını, günü gününe tuttuğu notlarla kamuoyunun bilgisine sunmaktayız. Paşa’nın vefatından hemen sonra eşi İclal Hanım’ın son cümleyi yazdığı günün üzerinden 61 yıl geçti. Bu süre zarfında Kâzım Karabekir hakkında çok yazı yazıldı, çok söz söylendi.Yazılanlarla söylenenlerin bir kısmı gerçeği ortaya koyarken, bir bölümü de Karabekir’in fikir ve eylemlerini çeşitli sebeplerle doğru olarak yansıtmadı.Osmanlı Devletinin en zor döneminde yetişmiş, İttihat ve Terakki Cemiyeti’nin kuruluşunda yer almış, ancak Cemiyet Meşrutiyet’in ilânından sonra parti haline geldiğinde ortaya çıkan yanlışlıkları görmüş; Milli Mücadele’nin ilk zaferini kazanmış, Doğu cephesindeki başarılarından sonra elindeki askeri güç ile Batıya destek olmuş; Cumhuriyet’in  kurulmasıyla birlikte devrimlerin halka benimsetilmesi konusunda hassasiyet göstermiş, devlet yönetiminde istibdada her zaman karşı çıkmış olan Kâzım Karabekir Paşa’nın kendisi için tuttuğu bu notlar incelendiğinde, geniş bir dönemi kapsayan çok önemli olaylara tanık olunacaktır. "
        }
    ],
    [
        54,
        {
            "isbn": "978-6050839227 ",
            "title": "Milli Mücadele Hatıraları ",
            "original-title": " İstiklal Harbi ve Gizli Cihetleri",
            "original-language": "TR-OTA ",
            "originally-published": 1951,
            "written-by": [
                { "name": "Ali İhsan Sabis ", "role": "Author " },
                { "name": "Erhan Çifci", "role": "Compiler" },
            ],
            "print-year": 2021,
            "genre": ["Memoir ", " History"],
            "language": " TR",
            "publisher": "Timaş Yayınları ",
            "edition": " 1th",
            "summary": "“Hepimiz bu fani dünyadan bir gün göçeceğiz. Yakın tarihin aydınlatılması işinden çekinmek, vatana faydalı değildir. İbret almak, dertleri gösterip devasını aramak vatandaşlık icabıdır. Meçhul hakikatler üzerindeki esrarlı [gizli] perdeleri tarihin tenviri için yavaş yavaş kaldırmak, tarihin hakkını tarihe vermek zamanı gelmiştir.” -Ali İhsan Sâbis-Türk milletinin sadece hasımlarını değil, “makûs talihini” de yendiği Millî Mücadele dönemini ele alan anı-hatıra türü eserler arasında belki de en fazla dikkat çekeni Ali İhsan Sâbis’in yazdıklarıdır. Zira gerek o dönemdeki askerî konumu gerekse özgün bir karaktere sahip olması Sâbis’in yazdıklarını emsallerine göre farklı kılar.Önce Topçu Harbiyesini, ardından ise Erkân-ı Harbiye Mektebini birincilikle bitirerek askerî kariyerine başlayan Ali İhsan Sâbis; sert disiplinli, özgüveni yüksek ve atılgan bir kumandan olarak tanınmış, emrindeki askerler tarafından büyük saygı görmüştür. Birinci Dünya Harbi’nde gösterdiği üstün liyakat sayesinde rütbesi genç yaşında paşalığa terfi ettirilen Sâbis, harp boyunca aksaklık tespit ettiği yerlerde, ilgili makamlara açık ve sert eleştirilerde bulunmaktan çekinmemiştir. Ne var ki bu tavrı Millî Mücadele’nin kritik günlerinde de devam edince üst komuta kademesinin tepkisini çekmiş ve görevden alınmasını beraberinde getirmiştir. “Sakıncalı” kişiliğinden ötürü Cumhuriyet yıllarında iyice gözden düşen ve deyim yerindeyse “kenara itilen” Sâbis, bu dönemde münzevi sayılabilecek bir hayat yaşamıştır. Böyle bir atmosferde kırgınlık ve sitem duygularıyla kaleme aldığı hatıraları, yayınlandığı ilk andan itibaren büyük yankı uyandırmıştır. Nutuk da dâhil olmak üzere, pek çok mecradan kendisine yöneltilen eleştirilere karşılık verirken karakterine uygun sertlikteki bir üslubu tercih etmiştir. Bu anlamda Sâbis, taraf olduğu birçok resmî yazışmanın kopyalarını da kullanarak, şahsına yöneltilen iddia ve ithamlara verdiği cevapların altını doldurmaya çalışmıştır.Millî Mücadele yıllarında “Ordu Kumandanı” sıfatıyla o dönemin parçası olan bir askerin şahıslara ve olaylara ilişkin hatıralarını eleştirel bir üslupla kaleme alması, bu metni öne çıkaran oldukça önemli bir noktadır. Bütün bu yönleriyle Ali İhsan Sâbis’in Millî Mücadele Hatıraları, Millî Mücadele’ye farklı bir pencereden bakılmasını sağlamaktadır. "
        }
    ],
    [
        55,
        {
            "isbn": "978-9750801318 ",
            "title": "Mareşal Fevzi Çakmak ve Günlükleri I.",
            "original-title": " ",
            "original-language": " TR-OTA",
            "originally-published": "N/A",
            "written-by": [
                { "name": "Nilüfer Hatemi ", "role": "Author " },
                { "name": "Mustafa Koç", "role": "Compiler" },
            ],
            "print-year": 2010,
            "genre": [" Memoir", "History "],
            "language": " TR",
            "publisher": " Yapı Kredi Yayınları",
            "edition": " 2th",
            "summary": "Bir ulusun yıkılış ve kurtuluş günlüğü.Modern Türkiye’nin kurucularından Mareşal Fevzi Çakmak’ın kaleminden, “imparatorluğun en uzun” on bir yılının (1911-1921) öyküsü… Mareşal Fevzi Çakmak’ın, 30 Mart 1911’den vefatından bir hafta öncesine; 2 Nisan 1950’ye kadar titizlikle ve askeri bir disiplinle tuttuğu günlükleri ilk kez gün ışığına çıkıyor. Yıllar süren titiz ve yorucu bir çalışmanın ürünü olarak gerçekleşen elimizdeki eser, bugüne kadar varlığı dahi bilinmeyen bu günlüklerin 30 Mart 1911-31 Aralık 1921 arasındaki 11 yıllık dönemi ve Mareşal’in ölümünden önceki son 3 aylık dönemi kapsıyor.Balkan Harbi, I. Dünya Savaşı’nın muhtelif cepheleri ve en önemlisi Kurtuluş Savaşı yıllarını kapsayan günlükler, ulusumuzun yıkıştan kurtuluşa yürüdüğü, en zor 11 yılını gün gün bütün ayrıntılarıyla gözler önüne seriyor. İlk başta genç, aktif ve başarılı bir subay olarak sahnedeki yerini alan Fevzi Çakmak, bir süre sonra sahnenin en önemli aktörlerinden biri olarak karşımıza çıkıyor; yirmi yıl gibi bir süreyle tarihimizin en uzun süre görevde kalan “genelkurmay başkanı” olan Fevzi Çakmak’ın bizzat kumandanlık ettiği, Arnavutluk İsyanı’ndan Çanakkale Savaşı’na, Doğu Cephesi’nden Sakarya Savaşı’na birinci ağızdan tanıklıklar, tespitler… En kötü günlerde bile soğukkanlılığını yitirmeyen, sarsılmaz bir askerin 11 yıllık cephe günlüğü; güçlükler, zorluklar ve ölümlerle dolu günlerde dahi hiç yitirilmeyen ümit ve coşku dolu satırları… Dr. Nilüfer Hatemi’nin, Princeton Üniversitesi’nde doktora tezi olarak hazırladığı günlüklere, Mareşal’in ailesi ve gençlik yıllarına dair iki bilimsel inceleme bölümü ile ilk kez yayımlanan belge ve fotoğraflar eşlik ediyor. Dr. Hatemi’nin, Mareşal Fevzi Çakmak üzerine ilk bilimsel çalışma olan eseri, hocaları Prof. Norman Itzkowitz ve Prof. Şükrü Hanioğlu’nun ‘takdim’iyle "
        }
    ],
    [
        56,
        {
            "isbn": "978-9750801318 ",
            "title": "Mareşal Fevzi Çakmak ve Günlükleri II. ",
            "original-title": " ",
            "original-language": "TR-OTA ",
            "originally-published": "N/A",
            "written-by": [
                { "name": "Nilüfer Hatemi ", "role": "Author " },
                { "name": "Mustafa Koç", "role": "Compiler" },
            ],
            "print-year": 2010,
            "genre": [" Memoir", "History "],
            "language": " TR",
            "publisher": " Yapı Kredi Yayınları",
            "edition": " 2th",
            "summary": "Bir ulusun yıkılış ve kurtuluş günlüğü.Modern Türkiye’nin kurucularından Mareşal Fevzi Çakmak’ın kaleminden, “imparatorluğun en uzun” on bir yılının (1911-1921) öyküsü… Mareşal Fevzi Çakmak’ın, 30 Mart 1911’den vefatından bir hafta öncesine; 2 Nisan 1950’ye kadar titizlikle ve askeri bir disiplinle tuttuğu günlükleri ilk kez gün ışığına çıkıyor. Yıllar süren titiz ve yorucu bir çalışmanın ürünü olarak gerçekleşen elimizdeki eser, bugüne kadar varlığı dahi bilinmeyen bu günlüklerin 30 Mart 1911-31 Aralık 1921 arasındaki 11 yıllık dönemi ve Mareşal’in ölümünden önceki son 3 aylık dönemi kapsıyor.Balkan Harbi, I. Dünya Savaşı’nın muhtelif cepheleri ve en önemlisi Kurtuluş Savaşı yıllarını kapsayan günlükler, ulusumuzun yıkıştan kurtuluşa yürüdüğü, en zor 11 yılını gün gün bütün ayrıntılarıyla gözler önüne seriyor. İlk başta genç, aktif ve başarılı bir subay olarak sahnedeki yerini alan Fevzi Çakmak, bir süre sonra sahnenin en önemli aktörlerinden biri olarak karşımıza çıkıyor; yirmi yıl gibi bir süreyle tarihimizin en uzun süre görevde kalan “genelkurmay başkanı” olan Fevzi Çakmak’ın bizzat kumandanlık ettiği, Arnavutluk İsyanı’ndan Çanakkale Savaşı’na, Doğu Cephesi’nden Sakarya Savaşı’na birinci ağızdan tanıklıklar, tespitler… En kötü günlerde bile soğukkanlılığını yitirmeyen, sarsılmaz bir askerin 11 yıllık cephe günlüğü; güçlükler, zorluklar ve ölümlerle dolu günlerde dahi hiç yitirilmeyen ümit ve coşku dolu satırları… Dr. Nilüfer Hatemi’nin, Princeton Üniversitesi’nde doktora tezi olarak hazırladığı günlüklere, Mareşal’in ailesi ve gençlik yıllarına dair iki bilimsel inceleme bölümü ile ilk kez yayımlanan belge ve fotoğraflar eşlik ediyor. Dr. Hatemi’nin, Mareşal Fevzi Çakmak üzerine ilk bilimsel çalışma olan eseri, hocaları Prof. Norman Itzkowitz ve Prof. Şükrü Hanioğlu’nun ‘takdim’iyle "
        }
    ],
    [
        57,
        {
            "isbn": "978-9752201774  ",
            "title": "Hatıralar",
            "original-title": " ",
            "original-language": " TR",
            "originally-published": "N/A",
            "written-by": [
                { "name": "İsmet İnönü ", "role": "Author " },
                { "name": "Sabahattin Selek", "role": "Compiler" },
                { "name": "İnönü Vakfı Arşivi", "role": "Pictures" },

            ],
            "print-year": 2023,
            "genre": ["Memoir ", "History "],
            "language": "TR ",
            "publisher": " Bilgi Yayınevi",
            "edition": "7th ",
            "summary": "İSMET İNÖNÜ,77. yaşına basarken kendisine hatıralarını yazması gerektiğini söyleyenlere gülerek,Ne hatırası, hatıra olacak zaman olmadı ki;daha dün bir, bugün iki diye takılmış, sonra ciddileşerek, Devlet kurmuş olanların hatırayazmaları kolay değildir. Hatıralarda her şeyinsöylenmesi ve doğru olarak söylenmesi lazımdır. Kolay olmayan da budur demişti.Nitekim Atatürk de hatıralarını yazmayı hiç düşünmemişti.Okuyucular, İsmet İnönü Hatıralar kitabında belki her şeyin söylenmediğini,ancak söylenen her şeyin doğru söylendiğini;ve büyük asker - diplomat - devlet adamının,kendine has üslubuyla aynı zamanda ne büyükbir edip olduğunu da açıkça görecekler.Bilgi Yayınevi, Türkiye'nin çok önemli birdönemine ışık tutan Hatıralardı kamuoyuna toplu halde sunmanın övüncünü taşımaktadır."
        }
    ],
    [
        58,
        {
            "isbn": "978-6053322108 ",
            "title": " Hasanoğlan Hatırası –Bir Köy Enstitülünün Kaleminden ve Objektifinden (1941-1951)",
            "original-title": " ",
            "original-language": " TR",
            "originally-published": "N/A",
            "written-by": [
                { "name": "Mustafa Güneri ", "role": "Author " },
                { "name": "Duru Güneri, Şengün Kılıç Hristidis", "role": "Picture/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" History", "Archive"],
            "language": " TR",
            "publisher": "İş Bankası Kültür Yayınları ",
            "edition": "7th ",
            "summary": "Hasanoğlan Köy Enstitüsü’nün kuruluşunda yapı sanat kolu başkanlığını üstlenerek 1941-51 döneminde bu görevi sürdüren eğitimci Mustafa Güneri, fotoğraf makinesini elinden hiç düşürmedi. Bu eğitim kurumunun, öğrencilerinin ve öğretmenlerinin emeğiyle bozkırda yoktan var edilişinin ve gelişmesinin her aşamasını görüntüledi. Özlü biçimde yazdığı tanıklıkları ve 300’ü aşkın fotoğrafı, yetmiş yıl öncesinin bu eşsiz tecrübesini, bütün heyecanıyla günümüze yansıtıyor "
        }
    ],
    [
        59,
        {
            "isbn": "978-6057531544 ",
            "title": " Zeytindağı",
            "original-title": " ",
            "original-language": "TR-OTA ",
            "originally-published": "N/A",
            "written-by": [
                { "name": " Falih Rıfkı Atay", "role": "Author " },
                { "name": "Muharrem Kaşıtoğlu", "role": "Editor-in-chief/Compiler" },
            ],
            "print-year": 2023,
            "genre": ["History ", "Politic ", "Memoir "],
            "language": "TR ",
            "publisher": "Pozitif Yayıncılık ",
            "edition": "3th ",
            "summary": "Zeytindağı, insanın kanını donduran tarihi bir süreci, “bir imparatorluğun çöküşünü” o zamana göre en duru Türkçe ile karşımıza getiriyor. Kitapta Mehmetçik’in Yemen’de, Aden’de, Kanal’da, Gazze’de, Arap çöllerinde nasıl kırıldığını, yenilgiden sonra bir vagon dolusu “mecidiye altınını” bile nasıl bıraktığımızı hayretler içerisinde okuyacaksınız.Cemal Paşa’nın emir subayı olarak, o günlerde en yakınında olan Falih Rıfkı, Zeytindağı kitabıyla tarihimize bir ibret belgesi bırakırken, her biri bir destan olabilecek, askerlerin günlükleri ve âdeta kumar masasında kaybedilen Ahmetlerin, Mehmetlerin hikâyeleri tüylerinizi ürpertecek "
        }
    ],
    [
        60,
        {
            "isbn": "978-6055514426  ",
            "title": "Kurtuluş ",
            "original-title": " ",
            "original-language": " ",
            "originally-published": 1966,
            "written-by": [
                { "name": " Falih Rıfkı Atay", "role": "Author " },
                { "name": "Muharrem Kaşıtoğlu", "role": "Editor-in-chief/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["History ", "Politic ", " Review"],
            "language": " TR",
            "publisher": "Pozitif Yayıncılık ",
            "edition": "4th ",
            "summary": "Evet on sekizinci yüzyılın sonlarından beri kurtuluş yolları arıyoruz. Altı ihtilal yaptık. Doğru 'teşhis' koyan ve doğru 'tedavi' yolu gösteren yalnız Atatürk devrimciliği olmuştur. -'Falih Rıfkı Atay'-  Atay bu kitabında, III. Selim dönemi ile 27 Mayıs 1960 tarihleri arasında gerçekleşen altı ihtilalle bu ihtilallerin Türk insanına kazandırdıkları ve kaybettirdikleri hakkındaki görüşlerini dile getiriyor. Milli Mücadele yıllarına birebir tanıklık eden Atay, eserinde Türkiye Cumhuriyeti'nin birçok konuda hâlâ bağımsızlık ve özgürlük mücadelesi verdiğine değinmekte ve bunlar için asıl çözüm yolunun sağ ve sol görüşten ziyade, Atatürkçülükte olduğunun altını çizmektedir. Bu eser Falih Rıfkı Atayın gözünden Atatürk sonrası Türkiyesinin de bir panoraması "
        }
    ],
    [
        61,
        {
            "isbn": "978-6055514419 ",
            "title": "İmparatorluğun Batış Yılları ",
            "original-title": "Batış Yılları ",
            "original-language": "TR ",
            "originally-published": 1963,
            "written-by": [
                { "name": " Falih Rıfkı Atay", "role": "Author " },
                { "name": "Muharrem Kaşıtoğlu", "role": "Editor-in-chief/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["History ", " Politic", "Review"],
            "language": " TR",
            "publisher": "Pozitif Yayıncılık ",
            "edition": " 4th",
            "summary": " “Biz Osmanlı İmparatorluğu’nun son çocuklarıyız. Biraz büyüyüp kendimize geldiğimiz zaman memleket sınırlarının bir ucu Adriyatik, bir ucu Fars Körfezi kıyılarındaydı. Rüştiye Mektebi’nde okuduğumuz coğrafya kitabına göre ülkemiz daha da büyüktü. Mısır ve Sudan, Bulgaristan Prensliği, Bosna ve Hersek sınırlarımız içindeydi. Henüz Tuna’lar, Nil’ler ve Fırat’lar Türkiye’siydik. Şimdiki Doğu petrollerinin bütün kaynakları topraklarımızdaydı.Bu sayfalarda çocukluğumun ve ilk gençliğimin havasını teneffüs ettirmek üzere sizleri gerilere götürmek istiyorum. 1918’e kadar geçmişin hatıralarını, durmadan ve son dakikaya kadar uslanmadan ve ayılmadan ödeyen bir nesil olduk. Hiçbirini kendi işlemediğimiz günahların acı ve ağır azaplarını biz çektik. Bugün ve yarın için faydalı dersler verebilecek ölüm kalım imtihanlarından geçtik.Maksadım, bugünün ve yarının gençlerine Osmanlı'nın batış ve dağılış yıllarının hikâyelerini anlatmak ve onları Türkiye’nin geleceği üzerinde daha uyanık tutmaktan ibaret.” -Falih Rıfkı ATAY"
        }
    ],
    [
        62,
        {
            "isbn": "978-9756461754  ",
            "title": " Mustafa Kemal'in Mütereke Defteri",
            "original-title": " ",
            "original-language": "TR ",
            "originally-published": 1955,
            "written-by": [
                { "name": " Falih Rıfkı Atay", "role": "Author " },
                { "name": "Muharrem Kaşıtoğlu", "role": "Editor-in-chief/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" History", " "],
            "language": " TR",
            "publisher": "Pozitif Yayınevi ",
            "edition": "3th ",
            "summary": "Mustafa adını ilk defa işitiyordum. Onun da İttihat ve Terakki Fırkası’nın ileri gelenlerinden olduğunu bu seyahatte öğrenmiştim.Falih Rıfkı Atay – Mustafa Kemal’in Mütareke Defteri- Hakkında en çok rivayet üretilen, en sık tartışılan simadır Mustafa Kemal. İçtiği içkiden yaptığı inkılaplara, sofralarından insan ilişkilerine söylenmedik laf bırakılmamıştır. Bunların ise ne kadarının doğru, ne kadarının yanlış hâlâ tartışılıyor.1920’lerin başından ölümüne kadar Atatürk’ün en yakınında bulunan gazeteci-yazar Falih Rıfkı Atay’ın uzun yıllar önce yayınlanan “Mustafa Kemal’in Mütareke Defteri” adlı kitabı tartışılan birçok konuya ışık tutuyor.Atatürk, İttihat ve Terakki Fırkası mensubu muydu? Rejimin değişeceğini Meclis’e ilk defa nasıl haber verdi?Ticarete girip niçin battı? Gazete macerasına kiminle nasıl girdi?Yazı ve harf inkılabını üç ayda nasıl gerçekleştirdi?Nasıl oldu da Suudi Arabistan’daki bir toplantıya heyet gönderdi?Yukarıda bahsedilenler gibi birçok olayın gerçekte nasıl olduğunu merak ediyorsanız ve yakın tarihte gerçekten ne olduğunu birinci ağızdan öğrenmek istiyorsanız “Mustafa Kemal’in Mütareke Defteri” sizin için bulunmaz bir rehber olacaktır. "
        }
    ],
    [
        63,
        {
            "isbn": "978-6054726950 ",
            "title": " Ali Suavi : Baş veren İnkılapçı",
            "original-title": " ",
            "original-language": "TR ",
            "originally-published": 1954,
            "written-by": [
                { "name": "Falih Rıfkı Atay ", "role": "Author " },
                { "name": "Muharrem Kaşıtoğlu", "role": "Editor-in-chief/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" History", " Biography"],
            "language": " TR",
            "publisher": "Pozitif Yayınevi ",
            "edition": "1th ",
            "summary": "Maksadı halkı uyandırmak, devleti maddî manevî bütün tesisleriyle yeniden nizamlayarak kurmaktır... Yazılarında padişahlar, vezirler ve paşalar için hürmet sıfatları kullanmaz, bu bakımdan bir demokrattır. Yalnız demokrat mı? Bir Türkçü ve galiba ilk Türkçü… Kendini aşağılık duygusundan belki de ilk kurtaran, tarihe ve ilme sarılarak vatandaşlarını Türk ırkının ve dilinin üstünlüğüne inandırmak için çırpınan ilk inkılâpçı... Frenk tenkitçileri karşısına, dar Hıristiyanlık - İslâmcılık çerçevesini kırarak, ırkının İslâm'dan önce ve sonraki medeniyet ve kültür dâvâsı ile çıkan ilk yazar... Falih Rıfkı Atay  "
        }
    ],
    [
        64,
        {
            "isbn": " 978-9756461631",
            "title": " Çankaya",
            "original-title": " ",
            "original-language": " TR",
            "originally-published": 1958,
            "written-by": [
                { "name": " Falih Rıfkı Atay", "role": "Author " },
                { "name": "Muharrem Kaşıtoğlu", "role": "Editor-in-chief/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" History", "Biography "],
            "language": " TR",
            "publisher": " Pozitif Yayınevi ",
            "edition": "3th ",
            "summary": "Kurduğu Cumhuriyet'le adını tarihin şanlı sayfalarına yazdıran, Türk'ün ne olduğunu dünyaya gösteren, olağanüstü şartlarda ortaya çıkmış sıra dışı bir liderdi Atatürk. O, işgal edilmemiş yeri, zaptedilmemiş toprağı kalmayan bir milletin küllerinden doğmasına önderlik etti.Büyük başarılara imza atmış Atatürk hakkında birçok kitap ve makale yazıldı. Atatürk hakkındaki her şey etraflıca tartışıldı, hâlâ tartışılıyor. Bu yazıların birçoğu ancak Atatürk öldükten sonra yazıldığı için, onu tanıyanların ilk elden verdiği bilgilerin kıymet-i harbiyesi daha önemlidir.Falih Rıfkı Atay 1923'den 1938'e kadar Atatürk'ün yanında bulunmuş, onun yaşadıklarını bizzat kendisinden dinlemiş ve hatta birçoğuna şahit olmuş devrin önemli gazetecilerindendir. Çankaya Atatürk'ü doğumundan okul yıllarına, savaştığı cephelerden yaptığı inkılaplara, tartışma sofralarından insani yönlerine kadar her detayı anektodlara yer vererek anlatan muazzam bir çalışma. "
        }
    ],
    [
        65,
        {
            "isbn": " 978-6256774100",
            "title": " İMPARATORLAR YATAKLARINDA ÖLMEZ : Caesar’dan Romulus Augustulus’a, MÖ 44 - MS 476",
            "original-title": "Keizers Sterven Niet in Bed: Van Caesar tot Romulus Augustulus, 44 v.Chr.-476 n.Chr. ",
            "original-language": " NL",
            "originally-published": 2001,
            "written-by": [
                { "name": "Fik Meijer ", "role": "Author " },
                { "name": "Gürkan Ergin", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" History", " "],
            "language": "TR ",
            "publisher": " Kronik Kitap",
            "edition": " 2th",
            "summary": "İmparatorlar Yataklarında Ölmez, MÖ 44’te öldürülen Iulius Caesar’dan MS 476’da tahttan feragat eden Romulus Augustulus’a kadar başa geçmiş bütün Roma imparatorlarının bu dünyadaki son anlarına eğiliyor. Bunu yaparken imparatorların ölüm biçimlerinin hayatlarına dair neler anlattığını da işaret ediyor. Fik Meijer Roma’da imparator olmanın, tehlikelere ve tahtı ele geçirmek için birbiri ardına ortaya çıkan aç gözlü rakiplere rağmen çekiciliğini nasıl koruduğunu gösteriyor.İmparatorlar Yataklarında Ölmez, imparatorların kişisel tarihlerini açık bir şekilde anlatırken, aynı zamanda Roma İmparatorluğu’ndaki siyasi entrikaları ve dramları gözler önüne seriyor. "
        }
    ],
    [
        66,
        {
            "isbn": " 978-6052993897",
            "title": " SPQR : Antik Roma Tarihi",
            "original-title": "SPQR: A History of Ancient Rome ",
            "original-language": " EN",
            "originally-published": 2015,
            "written-by": [
                { "name": "Professor Mary Beard  ", "role": "Author " },
                { "name": "İrem Sağlamer", "role": "Translator/Compiler" },
            ],
            "print-year": 2019,
            "genre": [" History", " "],
            "language": "TR ",
            "publisher": " Pegasus Yayıncılık",
            "edition": "2th ",
            "summary": "“Romulus ve Remus kuruluş efsanesinden İmparator Caracalla’nın özgür Roma yurttaşlarına… Surlar’ın binyıllık tarihi.” Antik Roma, modern dünyanın sağladığı olanaklarla düşünüldüğünde bile görkemli bir kentti: İspanya’dan Suriye’ye uzanan bir imparatorluğun güç merkezi; bir milyondan fazla insanın yaşadığı, genişleyen bir imparatorluğun metropolü; “lüks ve pisliğin, özgürlük ve sömürünün, kente ait olmanın yarattığı gurur ile kanlı iç savaşın birbirinden ayrılmadığı” dayatmacı bir kent… Öte yandan İtalya’nın ortasında sıradan bir köy olmanın ötesine geçmeyen bir bölge, üç kıtaya uzanan uçsuz bucaksız bir alana hükmeden; iktidar, yurttaşlık, savaş, imparatorluk, lüks ve güzellik gibi temel kavramlarımıza biçim veren bu denli baskın bir güce nasıl ve neden dönüşebilmişti? Bu değersiz köyün alamet-i farikası neydi ve nasıl olmuştu da bu alamet açığa çıkmıştı? Romalılar kendileri ve başarıları konusunda ne düşünüyordu? Ve bizim için neden hâlâ bu kadar önemliler? Binyıllık tarihi kapsayan ve esaretten cesarete Roma kültürünün temellerini anlaşılır kılan; ayrıca demokrasiyi, göç olgusunu, dinî mücadeleleri, toplumsal hareketliliği ve sömürüyü, genişleyen imparatorluk bağlamında sorgulayan SPQR; Cicero, Jül Sezar, Kleopatra, Augustus ve Nero gibi Roma’yı Roma yapan karakterlerden kadınlara, kölelere, azat edilmişlere, suikastçılara ve hiçbir zaman kazanan tarafta olmayan geleneksel tarihin göz ardı ettiği Roma’ya kadar Surlar’ın tarihinin izini sürüyor.  "
        }
    ],
    [
        67,
        {
            "isbn": " 978-6058195394 ",
            "title": " Roma İmparatorluğu'nun Gerileyiş ve Çöküş Tarihi (1. Cilt)",
            "original-title": "The History of the Decline and Fall of the Roman Empire ",
            "original-language": " EN",
            "originally-published": 1776,
            "written-by": [
                { "name": "Edward Gibbon", "role": "Author " },
                { "name": "Asım Baltacıgil ", "role": "Translator/Compiler" },
            ],
            "print-year": 2019,
            "genre": ["History ", " Roman "],
            "language": " TR",
            "publisher": " İNDİE KİTAP ",
            "edition": "1th ",
            "summary": " “Değerli bayım, tarih kitabınızı heyecanla ve yutarcasına okurken bu heyecanımı, zarif armağanınızdan dolayı teşekkür etmek ve eserinizin bende uyandırdığı memnuniyeti size iletmek için kesintiye uğratma gereksinimine karşı koyamadım. Üslubunuzun değeri, konunuzun derinliği, bilginizin genişliği bakımlarından kitabınız takdire değer, itiraf ederim ki, sizi tanımak onuruna erişmemiş olsaydım, böyle bir eserin, zamanımızda bir İngiliz tarafından yazılmış olmasını yadırgardım. Buna gülebilirsiniz ama bana öyle geliyor ki zamanımızdaki yurttaşlarımız akıl almaz ve saçma bir barbarlık içerisine dalmışlar, güzel sanatları tümüyle ihmal etmişlerdir. Onlardan hiçbir değerli ürün beklememekteyim. Bu kentteki bütün aydınların, eserinize hayran olmakta ve devamını özlemle beklemekte birleştiklerini öğrenmekle, benim gibi, sizin de memnun olacağınızdan eminim.” - David Hume"
        }
    ],
    [
        68,
        {
            "isbn": "  	978-6056933523 ",
            "title": " Roma İmparatorluğu'nun Gerileyiş ve Çöküş Tarihi (2. Cilt)",
            "original-title": "The History of the Decline and Fall of the Roman Empire ",
            "original-language": " EN",
            "originally-published": 1776,
            "written-by": [
                { "name": "Edward Gibbon", "role": "Author " },
                { "name": "Asım Baltacıgil ", "role": "Translator/Compiler" },
            ],
            "print-year": 2019,
            "genre": ["History ", " Roman "],
            "language": " TR",
            "publisher": " İNDİE KİTAP ",
            "edition": "1th ",
            "summary": "Dünyanın en ünlü tarih kitabı kendi efsanevi kurucu mitine sahiptir: “15 Ekim 1764'te, başkent kalıntıları arasında müzik dinlerken Roma’daydım, yalınayak rahipler Jüpiter tapınağında Vespers’a şarkı söylerken, Roma’nın Gerileme ve Çöküşü’nü yazma fikri aklıma düştü.” Edward Gibbon neredeyse bu harikulade rivayete kesinlikle karşı çıksa da onun Gerileyiş ve Çöküş’e giden çalışması, zamanı aşan bir Roma harabesi gibi görkemli, zarif ve hatta yüce bir anıt gibi karşımızdadır. Gibbon, bu çalışmasıyla antik dünyanın, kendi modern zamanıyla olan derin ve özel ilişkisinin izlerini takip etmiş ve Roma dönemi ile Aydınlanma arasında bağ kurmuştur."
        }
    ],
    [
        69,
        {
            "isbn": "978-6056933578 ",
            "title": " Roma İmparatorluğu'nun Gerileyiş ve Çöküş Tarihi (3. Cilt)",
            "original-title": "The History of the Decline and Fall of the Roman Empire ",
            "original-language": " EN",
            "originally-published": 1776,
            "written-by": [
                { "name": "Edward Gibbon", "role": "Author " },
                { "name": "Asım Baltacıgil ", "role": "Translator/Compiler" },
            ],
            "print-year": 2019,
            "genre": ["History ", " Roman "],
            "language": " TR",
            "publisher": " İNDİE KİTAP ",
            "edition": "1th ",
            "summary": "Roma İmparatorluğu’nun Gerileyiş ve Çöküş Tarihi, kelimelerin ve düşüncelerin tapınağıdır: Derinlikli ve müphem, garip ve beklenmedik köselerde zekâ ve ironinin görüldüğü, iyi değerlendirilmiş dipnotlarla bezenmiş hayranlık uyandıran bir eser.Gibbon'ın yedi yıllık emeğini çöpe atmayı göze alıp çok defa yeniden yazma girişiminin ardından ilk cilt, basit bir rastlantının ötesinde devrimler için uygun bir iklimde, ABD Bağımsızlık Deklarasyonu’ndan altı ay önce 17 Şubat 1776'da yayınlandı. İlk cildin yayınlanmasından iki ay sonra, Gibbon üvey annesine söyle kendini övmüştür:“Eserim oldukça iyi karşılandı, yazarlar, dünyaca ünlü kişiler ve hatta üst düzey kadınlar tarafından.”Bir başka deyişle bu eser dünya çapında ilgiye mazhar olmuş, zamanını asan bir tesir bırakmış ve edebiyatımızın yeri sorgulanamaz görkemli bir klasiği olmuştur. - The Guardian "
        }
    ],
    [
        70,
        {
            "isbn": "978-6056968822 ",
            "title": " Roma İmparatorluğu'nun Gerileyiş ve Çöküş Tarihi (4. Cilt)",
            "original-title": "The History of the Decline and Fall of the Roman Empire ",
            "original-language": " EN",
            "originally-published": 1776,
            "written-by": [
                { "name": "Edward Gibbon", "role": "Author " },
                { "name": "Asım Baltacıgil ", "role": "Translator/Compiler" },
            ],
            "print-year": 2019,
            "genre": ["History ", " Roman "],
            "language": " TR",
            "publisher": " İNDİE KİTAP ",
            "edition": "1th ",
            "summary": "İki yüzyıl sonra neden Gibbon okuyoruz? Nükteler ve yüksek ahlaki amacın birleşimi cevabın bir parçasıdır, ancak çok az tarihçi entelektüel paradigma değişimlerinden kurtulur. Gerileyiş ve Çöküş, İngilizcedeki en büyük anlatılardan birisidir, çünkü tarihe dair pek çok şeyi tek bir devasa hikâye ve engin bir kadroda birleştirmeyi başarmıştır.Yetkinliği büyük ölçüde tarihten ders çıkarma arzusundan gelir, o özgür bir bireydir ve bu anlamda güvendedir, başkalarının özgürlüklerini ve vatandaşların görevlerini üstlenmelerini sağlamak ister. Öğrettiği tarih her şeyden önce sivil sorumlulukla ilgilidir. Hristiyanlar ve barbarlar imparatorluğu yıktı, çünkü iyi vatandaşlar olmadılar, ruhlarını ya da hırslarını halkın kaygılarının önüne çıkardılar.Tertullian'dan Elagabalus'a kadar bir dizi tarihsel kişiliğe karşı sabırsızlığı, tarihsel rollerini ciddiyet ile yerine getiremedikleri içindir."
        }
    ],
    [
        71,
        {
            "isbn": " 	978-6050695939 ",
            "title": " Roma İmparatorluğu'nun Gerileyiş ve Çöküş Tarihi (5. Cilt)",
            "original-title": "The History of the Decline and Fall of the Roman Empire ",
            "original-language": " EN",
            "originally-published": 1776,
            "written-by": [
                { "name": "Edward Gibbon", "role": "Author " },
                { "name": "Asım Baltacıgil ", "role": "Translator/Compiler" },
                { "name": "Meral Harzem ", "role": "Translator/Compiler" },
            ],
            "print-year": 2020,
            "genre": ["History ", " Roman "],
            "language": " TR",
            "publisher": " İNDİE KİTAP ",
            "edition": "1th ",
            "summary": "Edward Gibbon’ın tarihyazımına en önemli katkılarından biri gerileyiş ve çöküş kavramını oturtması, bunu tanımlayış ve aktarış seklidir. Gibbon, Roma’nın gerileyiş ve çöküşünü bir problematik olarak ortaya koyup açıklamasıyla birlikte sonraki kuşakların farklı disiplinlerinde çalışan Roma’yı inceleyen bilim insanlarını da bu anlamda oldukça etkilemiştir. Roma İmparatorluğu’nun Gerileyiş ve Çöküş Tarihi’nin 5. cildinde Gibbon Hristiyanlığın etkisini irdelemeye devam ediyor. İmparatorluk bünyesinde ağırlığını giderek artıran Hristiyanlığın farklı mezheplerini detaylı olarak inceliyor ve Doğu ve Batı olarak ayrışmasını ortaya koyuyor. Gibbon, 5. cildin son bölümünde ise İslamiyet’in detaylı bir analizine girişiyor. Arap coğrafyasının siyasi ve toplumsal durumu ile Hz. Muhammed’in ailesinin geçmişinden başlayan bu bölümde peygamberliğin ilanı, İslam dininin gelişimi ve oluşturulan siyasi, hukuki, ekonomik ve sosyal yapıyı inceliyor."
        }
    ],
    [
        72,
        {
            "isbn": " 978-6050695977 ",
            "title": " Roma İmparatorluğu'nun Gerileyiş ve Çöküş Tarihi (6. Cilt)",
            "original-title": "The History of the Decline and Fall of the Roman Empire ",
            "original-language": " EN",
            "originally-published": 1776,
            "written-by": [
                { "name": "Edward Gibbon", "role": "Author " },
                { "name": "Asım Baltacıgil ", "role": "Translator/Compiler" },
                { "name": "Meral Harzem ", "role": "Translator/Compiler" },
            ],
            "print-year": 2020,
            "genre": ["History ", " Roman "],
            "language": " TR",
            "publisher": " İNDİE KİTAP ",
            "edition": "1th ",
            "summary": "Roma İmparatorluğu’nun Gerileyiş ve Çöküş Tarihi’nin 6. cildinde Gibbon, bir önceki ciltte giriş yaptığı İslamiyet analizini genişletiyor. Hz. Muhammed’in ölümünün ardından Müslümanların başına geçen halifelere odaklanıyor bu defa. Emevi, Abbasi, Fatımi vb. halifelik hanedanlarını ve İslam’ın bir imparatorluk haline gelişini gerçekleştirilen fetihler üzerinden inceliyor. Suriye ve Mısır ile başlayan bu büyük fetih hareketinin giderek Kuzey Afrika’ya, oradan İspanya’ya ve İtalya’ya nasıl ulaştığını anlatıyor.Gibbon, İstanbul’un Araplarca iki kez, Ruslarca 4 kez kuşatılmasına da değiniyor. Bunların yanında bugünkü Balkan ve Doğu Avrupa ülkelerinin kökenlerini ve Bizans ile ilişkilerini irdeliyor.6. cildin son bölümünün büyük bir kısmını ise Türklere ayırıyor; özellikle de Selçuklulara. Gaznelilere başkaldırıp halifenin övgülerini kazanan Selçuklu Türklerinin İslam imparatorluğu içinde gittikçe nasıl yükseldiğini, Romanus Diogenes’in önceki üç savaşı kazandığı halde Malazgirt’te nasıl bir bozguna uğradığını detaylandırıyor."
        }
    ],
    [
        73,
        {
            "isbn": " 978-6050695991 ",
            "title": " Roma İmparatorluğu'nun Gerileyiş ve Çöküş Tarihi (7. Cilt)",
            "original-title": "The History of the Decline and Fall of the Roman Empire ",
            "original-language": " EN",
            "originally-published": 1776,
            "written-by": [
                { "name": "Edward Gibbon", "role": "Author " },
                { "name": "Asım Baltacıgil ", "role": "Translator/Compiler" },
            ],
            "print-year": 2020,
            "genre": ["History ", " Roman "],
            "language": " TR",
            "publisher": " İNDİE KİTAP ",
            "edition": "1th ",
            "summary": "Roma İmparatorluğu’nun Gerileyiş ve Çöküş Tarihi’nin 7. cildinde Edward Gibbon’ın odak noktası Anadolu ve Ortadoğu. Haçlı seferlerini oluşturan saikler üzerinden ilerleyen Gibbon, Avrupalıların Anadolu ve Ortadoğu’da yaptıkları savaşların detaylarını aktarıyor bizlere. İstanbul’u, Kudüs’ü, Suriye’yi, Antakya’yı vs. ele geçiren haçlıların buralarda kurdukları krallıklarda neler yaptıklarını ve sonunda buraları nasıl kaybettiklerini irdeliyor. Gibbon bu noktada ayrıca Katolik ve Ortodoks bölünmesine kısaca değiniyor ve yıkımın eşiğine iyice yaklaşan Bizans İmparatorluğu’nun içinde bulunduğu karmakarışık durumu, taht kavgalarını, iç savaşları vb. de masaya yatırıyor.Gibbon son iki bölümü Osmanlı ve Moğol imparatorlarına ayırıyor. Cengiz Han ile başladığı bu yolculuğa Timur ve Osmanlılar ile devam ediyor. Hem Cengiz’in hem de Timur’un Uzak Asya’dan Avrupa’nın içlerine kadar uzayan muazzam imparatorluklarını, bu imparatorların sosyal, askerî ve idari yaklaşımlarını da irdeleyerek gözler önüne seriyor. Osmanlıların kuruluşu ve ilerleyişini ilk dört sultan üzerinden anlatmaya başlayan Gibbon, Timur ile Bayezid’i savaşa sürükleyen süreç ve Osmanlıları Fetret Devri’ne sokan savaşları hakkında detaylıca bilgi verdikten sonra Bayezid’in oğullarının iç savaşlarını farklı kaynaklar ışığında inceliyor. 7. cildin son noktasını ise II. Murat’ın İstanbul’u kuşatmasıyla koyuyor."
        }
    ],
    [
        74,
        {
            "isbn": " 978-6057321051 ",
            "title": " Roma İmparatorluğu'nun Gerileyiş ve Çöküş Tarihi (8. Cilt)",
            "original-title": "The History of the Decline and Fall of the Roman Empire ",
            "original-language": " EN",
            "originally-published": 1776,
            "written-by": [
                { "name": "Edward Gibbon", "role": "Author " },
                { "name": "Asım Baltacıgil ", "role": "Translator/Compiler" },
                { "name": "Burcu Okay ", "role": "Translator/Compiler" },
            ],
            "print-year": 2021,
            "genre": ["History ", " Roman "],
            "language": " TR",
            "publisher": " İNDİE KİTAP ",
            "edition": "1th ",
            "summary": "Roma İmparatorluğu’nun Gerileyiş ve Çöküş Tarihi’nin sekizinci ve son cildi ile insanlık tarihinin en önemli dönemeçlerinden birini almış oluyoruz. Edward Gibbon bu son cildin ilk üç bölümünde İstanbul’un fethine giden meşakkatli yolu anlatıyor. Bizans’ın içinde bulunduğu toplumsal, siyasal ve ekonomik karmaşayı, Batı’dan beklediği ama bir türlü gelmeyen yardımları, Batı’daki cumhuriyet ve krallıkların Bizans’a karşı umursamazlığını ortaya seriyor. Bu bölümlerde ayrıca Osmanlı’nın artık bir imparatorluk olarak anılmasına giden sürece, gerçekleştirilen siyasal, askerî ve ekonomik düzenlemelere ve nihayetinde İstanbul’un kuşatılmasına değiniyor.İstanbul’un fethiyle birlikte Gibbon, dikkatini Batı Hristiyan dünyasına veriyor ve son üç bölümü papalık mücadelelerine, Roma’da yöneticiler, soylular, din adamları arasında yaşanan kargaşalara, gerçekleştirilen konsillere vb. ayırıyor. Roma İmparatorluğu’nun Gerileyiş ve Çöküş Tarihi’nin son noktasını ise şu sözlerle koyuyor: “Hayatımın yirmi yılını meşgul eden ancak kendi arzularıma göre yetersiz kalan bu çalışmayı ilk olarak Capitolinus’un kalıntıları arasında düşündüm ve nihayet halkın merakına sundum.”"
        }
    ],
    [
        75,
        {
            "isbn": " 978-9752444591  ",
            "title": " Tarih",
            "original-title": "Historiai ",
            "original-language": " GRC ",
            "originally-published": 420,
            "written-by": [
                { "name": "Herodotos ", "role": "Author " },
                { "name": "Asım Baltacıgil ", "role": "Translator/Compiler" },
                { "name": "Burcu Uzunoğlu ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": ["History ", "  "],
            "language": " TR",
            "publisher": " Panama Yayıncılık ",
            "edition": "2th ",
            "summary": "Herodot’un hayatı üzerine bilinenler oldukça sınırlıdır. MÖ 5. yüzyılda (484-425 dolayları) yaşadığı sanılmaktadır, o dönemde Pers hâkimiyetinde bulunan Halikarnas’ta doğmuştur. Şiirsel anlatım geleneğinden koparak olayları metotlu bir araştırmanın konusu yapan, kategorize eden ve tarihsel anlatı olarak sunan bilinen ilk yazar olması nedeniyle “Tarihin Babası” olarak anılmaktadır. Hangi tarihte nereye gittiği bilinmemektedir, ancak hemen hemen tüm Pers diyarını gezmiş; Anadolu’yu aşıp Babil’e, Mısır’a, Libya’ya ayak basmış; Fenikelileri, Tuna boylarını, İskitleri tanımıştır. Tarih, Herodot’un insanlığa kazandırdığı tek eseridir. Herodot’un yaptığı geziler sırasında halktan rivayet edindiği; kral, rahip, kâhin gibi ileri gelen kişilerle görüştüğü; hatta resmi kayıtları incelediği tahmin edilir. Kimi zaman kendisinin de netliğe kavuşturamadığı kulaktan dolma bilgilere yer verirken, kimi zaman da bizzat şahit olduklarını en ince ayrıntılarıyla kaydetmiştir. Bir olayın farklı kaynaklardan edindiği versiyonlarını anlatıp kendisine daha makul geleni belirttiği de olmuştur.Tarih’in yazılış amacı Helenlerin ve diğer ulusların başarılarını gelecek kuşaklara aktarmaktır; ağırlıklı olarak Helenler ile Perslerin yürüttüğü savaşlar hakkında bilgi sunar. Ama Herodot bununla kalmaz; coğrafya, arkeoloji, mimari, sanat, folklor, mitoloji gibi alanlarda bize kaynak oluşturacak gözlemlerini de anlatısına serpiştirir. Üstelik anlatıyı kısa tutmak adına bu gözlemlerinden asla feragat etmez.Tarih, her birine Yunan mitolojisindeki bir ilham perisinin adı verilmiş olan dokuz kitaptan oluşur. İçerdiği zengin bilgilerin yanı sıra, yazarının herhangi bir siyasi güce boyun eğmemesi ve tarafsız bir tutum sergilemesi de övgüye değerdir."
        }
    ],
    [
        76,
        {
            "isbn": " 978-6057635266  ",
            "title": " KAN KIRMIZI KARLAR:Stalingrad’dan Teslimiyete Bir Alman Makineli Tüfek Nişancısının Anıları",
            "original-title": "Blood Red Snow: The Memoirs of a German Soldier on the Eastern Front",
            "original-language": "EN",
            "originally-published": 1998,
            "written-by": [
                { "name": "GUNTER K. KOSCHORREK ", "role": "Author " },
                { "name": "Barbaros Uzunköprü", "role": "Translator/Compiler" },

            ],
            "print-year": 2025,
            "genre": ["History ", "War", "Autobiography", "Biography"],
            "language": " TR",
            "publisher": " Kronik Kitap ",
            "edition": "6th ",
            "summary": "İKİNCİ DÜNYA SAVAŞI’NIN KAN KIRMIZI HATTI: STALİNGRAD… İkinci Dünya Savaşı’nın en zorlu cephe hattı: Stalingrad… Cehennem gibi kaynayan güneşin altında, diz boyu çamurun içinde, kar fırtınasının ortasında, soğuktan donmuş toprağın üzerinde ve karlara batmış hâlde savaşan askerler… Bir ağır makineli tüfek nişancısının tüm yaşananların merkezinde tuttuğu notlar… 19 yaşında Nazi Almanyası’nın silahlı kuvvetleri Wehrmacht’a katılan Günter K. Koschorrek, Doğu Prusya’da sıkı bir eğitimden geçerek Stalingrad’a konuşlandırılacak olan 24’üncü Panzer Tümeni’ne alındı. Muharebe hayatının büyük bir kısmını makineli tüfek nişancısı olarak geçirdi. Muharebelerde sergilediği üstün cesaret ve özveriden dolayı 2. Sınıf Demir Haç Nişanı, Bronz Yakın Muharebe Brövesi ve Altın Gazi Brövesi ile taltif edildi. Her ne kadar büyük oranda Stalingrad ve çevresinde görev yapsa da acı tecrübelerle dolu geri çekiliş sürecinde İtalya’nın kana bulanmış doğasına, Romanya ve Danimarka’ya, nihayet dönemin Çekoslovakya’sına savruldu. Sayısız kez ölümle burun buruna gelmesine ve altı kez yaralanmasına rağmen hayata sıkı sıkıya tutundu, savaşmaya devam etti.Sıradan bir asker (Landser) olarak başta Rus Cephesi olmak üzere görev yaptığı farklı noktalarda edindiği tüm şahsi tecrübelerini Kan Kırmızı Karlar adıyla kitaplaştıran Koschorrek, eserinin güvenilir bir kaynak olduğunu özellikle vurguluyor. Savaşın büyük kısmını Rus topraklarındaki avcı çukurlarında geçiren ve bu çukurları yalnızca düşmanla çarpışırken terk eden sayısız ismi meçhul askeri de takdirle anıyor. Stalingrad’da yaşananlar, korku ve nefret yüklü gözyaşları, kaçışlar, idamlar, ölülerin üzerine çöken akbabalar ve muharebe alanlarına dair daha pek çok detay, bu kitapta roman akıcılığında anlatılıyor.Stalingrad’dan Teslimiyete Bir Alman Makineli Tüfek Nişancısının Anıları, İkinci Dünya Savaşı’ndan 75 yıl sonra üslubuyla, görselleriyle ve haritalarıyla o günleri yeniden yaşatıyor."
        }
    ],
    [
        77,
        {
            "isbn": " 978-9752439641",
            "title": " Saraydan Hatıralar",
            "original-title": " Saraydan Hatıralar",
            "original-language": " TR-OTA",
            "originally-published": 2018,
            "written-by": [
                { "name": "İzzet Ziya ", "role": "Author " },
                { "name": " Ali Birinci/Yücel Yiğit", "role": "Compiler" },
            ],
            "print-year": 2018,
            "genre": ["History ", "Memoir"],
            "language": " TR",
            "publisher": "Kopernik Kitap ",
            "edition": "1th ",
            "summary": "İzzet Ziya Beyin Saraydan Hâtıralar adıyla ilk defa yayımlanacak olan bu kitabı, Sultan Reşat ve Sultan Vahdeddin dönemlerinde gerek ressam olarak gerekse memur olarak sarayda çalıştığı dönemde gördüğü, duyduğu ve bildiği olaylarla ilgili önemli bilgiler içermektedir. Şüphesiz hâtıralar sübjektif metinlerdir. İçerdiği bilgilerin doğruluğu araştırmaya tâbi tutulmalıdır. Ali Birinci ve Yücel Yiğit tarafından hazırlanan bu çalışma, araştırmayı teşvik etmesi, ilginç detaylar içermesi veya gözden kaçmış konulara değinmesi gibi sebeplerle tarih araştırmacıları için önemli bir kaynak eser olacaktır.  "
        }

    ],
    [
        78,
        {
            "isbn": "978-6057683724 ",
            "title": "Matbuat Alemindeki Hayatım ve İstiklal Mahkemesi Hatıraları",
            "original-title": " Matbuat Alemindeki Hayatım ve İstiklal Mahkemesi Hatıraları",
            "original-language": " TR-OTA",
            "originally-published": 2012,
            "written-by": [
                { "name": " Tahiru'l Mevlevi", "role": "Author " },
                { "name": "Nurcan Boşdurmaz ", "role": "Compiler" },
            ],
            "print-year": 2021,
            "genre": [" History", " Memoir"],
            "language": " TR",
            "publisher": " Büyüyenay Yayınları",
            "edition": "2th ",
            "summary": " İstiklâl Mahkemeleri hakkında yayımlanan birkaç önemli kitap arasında yer alan Tâhirü’l-Mevlevî’nin İstiklâl Mahkemesi Hatıraları adeta gelecek nesillere aktarmak üzere kaleme alınmış bir vesika niteliğine sahiptir. Yakın tarihimize dair tanıklıkları ve şahitlikleri içermesi sebebiyle, çok yönlü bir okumaya ve değerlendirmeye tabi tutulabilecek bir eser vasfını daima korumuştur.Tâhirü’l Mevlevî’nin hatıralarını, İstiklâl Mahkemesi’nde yapmak isteyip de yapamadığı ayrıntılı bir savunması olarak değerlendirebileceğimiz gibi, Osmanlı’nın ahlâk, gelenek ve yaşayış tarzı itibariyle batılılaşmasına karşı donanımlı, birikimli ve dindar bir aydının savunması olarak da görebiliriz.Osmanlı’nın çöküşü ve devrimler Türkiye’sinin doğuşuna şahit olup tekke ve zaviyelerin kapatılması, harf ve şapka inkılâplarıyla hayli sıkıntılı günler yaşayan yazar birçok yerde sessiz kalmayı tercih etmiştir. Ancak ilerleyen sayfalar boyunca bu sessizliğin aslında birçok şeyi de anlatmakta olduğu görülecektir. "
        }
    ],
    [
        79,
        {
            "isbn": "978-9754586176 ",
            "title": "(Atatürk’ün Sırdaşı) Kılıç Ali’nin Anıları ",
            "original-title": "Atatürk’ün Sırdaşı Kılıç Ali’nin Anıları ",
            "original-language": "TR-OTA",
            "originally-published": 2005,
            "written-by": [
                { "name": " Hulûsi Turgut ", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" History", "Memoir"],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 29th",
            "summary": " Ali Kılıç, (1888 – 1971) İstanbul Beşiktaş’ta doğdu. Asıl adı Emrullahzâde Âsaf’tı. Küçük Zabit Mektebi’nden mezun oldu. Balkan Savaşı ve Çanakkale Muharebelerinde teğmen-üsteğmen rütbeleriyle görev yaptı. Çanakkale’de yaralandı. Teşkilât-ı Mahsusa’da hizmet etti. 1917’de Azerbaycan’a giren İslam Ordusu Komutanı Nuri Paşa’nın (Enver Paşa’nın kardeşi) başyaverliğini yaptı. Mütarekeden sonra, 1919’da, ülkenin kurtulması için çalışma imkânlarını ararken, Enver Paşa’nın Orta Asya’daki birliklerine iltihak etmek üzere harekete geçti. Ancak, Mahmut Celâl Bey’in (Bayar) önerisi üzerine, Mustafa Kemal Paşa’nın Anadolu harekâtına katıldı. Mustafa Kemal Paşa, Kılıç Ali’yi Ayıntap (Gaziantep) ve Maraş (Kahramanmaraş) havalisinde Kuva-yı Milliye’yi teşkilâtlandırmaya memur etti. Emrullahzâde Âsaf, o tarihten itibaren Kılıç Ali namı ile tanınmaya başlandı. Cumhuriyet’in ilanından sonra Soyadı Kanunu çıkınca, Atatürk kendisine Kılıç soyadını verdi. Ayıntap ve Maraş’ta Fransız ve Ermenilere karşı direniş örgütlenmesinde büyük hizmetleri geçen ve Ayıntap Kahramanı diye anılan Kılıç Ali, Yozgat ve Düzce İsyanları’nın bastırılması sırasında Çerkez Ethem Kuvve-i Seferiyesi yanında görev aldı. 1920’de I. BMM’ ye Ayıntap Milletvekili seçildi. Aynı yıl Ankara İstiklal Mahkemesi üyeliğine getirildi. Türkiye İş Bankası’nın kurucu üyesi de olan Kılıç Ali, İstanbul’da vefat etti.'Ben, sözünü edeceğim olayları tarihtir diye anlatmayacağım.Bu, gelecek nesillerin işidir. Benim yazdıklarım tarih gerçeklerini aydınlatacak bir kaynak olursa ne mutlu bana.' Çok genç yaşta Atatürk’ün silah ve mücadele arkadaşı, vefatına kadar da onun en güvendiği dostlarından, sırdaşlarından olan Kılıç Ali, kendi gözünden ve kendi yaşadıklarından, tanıklık ettiği olaylardan yola çıkarak Kurtuluş Savaşı ve sonrasını anlatıyor… Oğlu Altemur Kılıç’ın gün ışığına çıkardığı belge ve anıları, gazeteci-araştırmacı Hulûsi Turgut derledi. "
        }
    ],

    [
        80,
        {
            "isbn": "978-6254298509",
            "title": " Erzurum’dan Ölümüne Kadar Atatürk’le Beraber",
            "original-title": "Erzurum’dan Ölümüne Kadar Atatürk’le Beraber ",
            "original-language": " TR-OTA",
            "originally-published": "1966",
            "written-by": [
                { "name": "Mazhar Müfit Kansu ", "role": "Author " },
                { "name": "", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Memoir", "History "],
            "language": "TR ",
            "publisher": " Türkiye İş Bankası Kültür Yayınları",
            "edition": " 1th",
            "summary": "Erzurum’un İstanbul kapısı muazzam bir kalabalıktan görünmez hale gelmişti. Bir bando ve ihtiram müfrezesi resmi selamı ifa etmek üzere vaziyet almıştı. Ve diyebilirim ki, mübalağasız Erzurum’un bütün halkı da Mustafa Kemal’i bir milli sır ve şuurun sezişleri içinde karşılamaya dökülmüştü. Kendisini ilk defa tanıdığım gibi ilk defa da dinliyordum. Hal ve hareketleri gibi dinamik, gür, çınlayan bir sesi vardı. Kısa görüşmesini bitirirken: Vatanı tazyiki altında tutan felaket ve musibetleri behemehal bertaraf edeceğiz, diyor ve sesi bu yolda en kesin ve vazıh bir iradenin taşışına sembollük ediyordu.”Gazi Mustafa Kemal Atatürk’ün yakın çalışma arkadaşlarından Mazhar Müfit Kansu’nun, Paşa’nın Anadolu’ya geçtiği 1919 yılından 1920 yılının ikinci yarısına kadar tuttuğu notlarla Cumhuriyet’in ilanına dair izlenimleri, 4 Mart-8 Kasım 1948 tarihleri arasında Son Telgraf gazetesinde tefrika edilmişti. Kitap, Osmanlı İmparatorluğu’nun Birinci Dünya Savaşı’ndaki son günlerinden başlayarak Mustafa Kemal ile ilk karşılaşma, Erzurum ve Sivas kongreleri, Mustafa Kemal’in Ankara’ya gelişi, Büyük Millet Meclisi’nin açılışı ve Cumhuriyet’in ilanı ana başlıklarında Mazhar Müfit Bey’in kayıt altına aldığı belge, görüşme ve tanıklıklarla birlikte kendi hatıralarını kapsıyor."
        }

    ],

    [
        81,
        {
            "isbn": "978-6257650007 ",
            "title": " Bir Haremağasının Hatıraları",
            "original-title": "Bir Haremağasının Hatıraları ",
            "original-language": "TR-OTA ",
            "originally-published": "1936",
            "written-by": [
                { "name": " Suat Derviş", "role": "Author " },
                { "name": "", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": [" Memoir", "History "],
            "language": " TR",
            "publisher": " İthaki Yayınları",
            "edition": "3th ",
            "summary": "Bir Haremağasının Hatıraları, II. Abdülhamit saltanatının son birkaç yılı içerisinde Yıldız Sarayı’nda geçen ve bu dönemi Hayrettin adlı bir haremağasının gözünden tüm ayrıntılarıyla anlatan bir tarihi roman. Ancak Suat Derviş sadece hareme ait bilinmeyenleri, saray entrikalarını anlatırken değil, hadım edilen, köleleştirilen bir erkeğin psikolojisini tasvir ederken de ustalığını gösteriyor.Bu romanı okurken Osmanlı sarayının gelmiş geçmiş tüm haremağalarını, bu insanların çocuk yaşta vatanlarından koparılışlarını, âdetini, dilini bilmedikleri bir coğrafyada kuma gömülerek etleri dağlanırken hissettikleri acıyı düşünün. Köle olarak satılığa çıkarılışlarını, hayatları boyunca tüm kaderlerinin bir başkasının iki dudağının arasında oluşunu aklınıza getirin. Göreceksiniz ki Suat Derviş tüm bunları düşünmüş, hissetmiş ve bu acıyı, karanlığı kelimelere dökebilmiş. "
        }
    ],

    [
        82,
        {
            "isbn": "978-9754583021 ",
            "title": "Erzurum Yolculuğu ",
            "original-title": "Путешествие в Арзрум во время похода 1829 года ",
            "original-language": "RU ",
            "originally-published": "1841",
            "written-by": [
                { "name": "Aleksandr Sergeyeviç Puşkin ", "role": "Author " },
                { "name": " Ataol Behramoğlu", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Memoir", "History "],
            "language": " TR",
            "publisher": " Türkiye İş Bankası Kültür Yayınları",
            "edition": "14th ",
            "summary": "1828’de sürgündeki asker arkadaşlarını görmek üzere Kafkasya’ya giden Puşkin, hepsinin Osmanlılar üzerine düzenlenen sefere katıldığını öğrenir.Az bilinen diyarları görmek ve bir savaşa tanık olmak için, sivil olarak orduya katılır. Yolculuk boyunca eskizler çizer ve bir kısmını dönüşünde yayımlayacağı notlar tutar.Ancak notlarını kısmen yayımladığında eleştirilir. Oysa her zamanki objektifliğiyle ve insancıllığıyla tanık olduklarını, gördüğü yerleri ve tanıdığı insanları anlatmaktır:Erzurum Seraskeri Salih Paşa, Paşa’nın eşi, Rus orduları kumandanı General Paskeviç, yolda vurulmuş yatan genç Türk askeri, Tellak Hasan… Hepsi de Puşkin’in gözünde insan olarak hakkettikleri değeri bulur; övgü ya da yergi konusu olmazlar.Bu yalın yaklaşımın, kendi ülkesini yeterince yüceltmemekle eleştirilmesi üzerine Puşkin ölümünden bir yıl önce tüm notlarını yayımlar.Puşkin Nişanı sahibi Ataol Behramoğlu’nun  notlarla zenginleştirilmiş ve elyazmasının yayımlanmamış bölümlerini de içeren çevirisi, 1829 Anadolusu’na eşsiz bir tanıklık… "
        }
    ],

    [
        83,
        {
            "isbn": " 978-9754588347",
            "title": "Enver Paşa’nın Anıları 1881-1908 ",
            "original-title": "Enver Paşa’nın Anıları 1881-1908 ",
            "original-language": " TR-OTA",
            "originally-published": "1991",
            "written-by": [
                { "name": " Enver Paşa", "role": "Author " },
                { "name": " Halil Erdoğan Cengiz", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": ["Memoir ", " History"],
            "language": "TR ",
            "publisher": " Türkiye İş Bankası Kültür Yayınları",
            "edition": " 22th",
            "summary": " 23 Temmuz 1908… Makedonya’nın Köprülü kazasında dağa çıkmış genç bir subay Meşrutiyet’i ilan eder…Bu subay, Enver Bey, başlattığı hareketin imparatorluğun kaderini kökten değiştireceğini ve kendi kaderinin de bu değişimle iç içe olduğunu henüz bilmemektedir…Enver Paşa, bu sıcak günlerin ardından kaleme aldığı anılarında gençlik, öğrencilik ve subaylık yıllarından, II. Meşrutiyet’e uzanan dönemi anlatıyor.Enver Paşa’nın, Balkan dağlarında çete kovalama ve çatışmalarla başlayan askerlik hayatı, Talât Bey ile tanışması, İttihat ve Terakki’ye girişi ve dağa çıkışı…Bu kitap, Osmanlı İmparatorluğu’nun son döneminde Cemal ve Talât Paşalarla birlikte ülkeyi yöneten Enver Paşa’yı kendi kaleminden okumak isteyenler için."
        }
    ],
    [
        84,
        {
            "isbn": "978-9944883849 ",
            "title": " Atatürk’le Beraber",
            "original-title": " Atatürk’le Beraber",
            "original-language": "TR-OTA ",
            "originally-published": 1956,
            "written-by": [
                { "name": " İsmail Habib Sevük", "role": "Author " },
                { "name": " Lütfü Tınç", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Memoir", " History"],
            "language": " TR",
            "publisher": " Türkiye İş Bankası Kültür Yayınları",
            "edition": " 9th",
            "summary": "Milli Mücadele’nin hız kazandığı dönemde, Meclis’te ve savaş meydanlarında yaşananları Türk halkına aktarmakla görevli bir gazetecinin kaleminden Atatürk ve o dönemler.İsmail Habib Sevük, Kurtuluş Savaşı’ndan Cumhuriyet’e ve devrimlere uzanan coşkulu değişim dönemini, tarihe not olarak düşüyor:Konya ve Adana gezilerinden Kastamonu’daki Şapka Devrimi’ne, saltanatın kaldırılışından İkinci Meclis seçimlerine dek pek çok tarihi olay…İsmail Habib Sevük’ün Atatürk’ün ölümü üzerine kaleme aldığı anıları, bir edebiyatçı ve gazeteci gözüyle 1921-38 döneminin panoramasını çiziyor.İlk baskısı Atatürk İçin adıyla yapılan bu kitabın dili genç kuşaklar için güncelleştirildi, metni fotoğraflar ve açıklayıcı dipnotlarla zenginleştirildi.  "
        }
    ],
    [
        85,
        {
            "isbn": "978-9944888479 ",
            "title": " İstanbul’da Kayıp Zamanlar",
            "original-title": "İstanbul’da Kayıp Zamanlar ",
            "original-language": " TR",
            "originally-published": 2010,
            "written-by": [
                { "name": " Liji Pulcu Çizmeciyan", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Memoir", "History "],
            "language": " TR",
            "publisher": " Türkiye İş Bankası Kültür Yayınları",
            "edition": " 10th",
            "summary": " İstanbul’da Kayıp Zamanlar, İstanbul’u, neredeyse Cumhuriyet’le yaşıt bir kız çocuğunun gözünden anlatıyor. Küçük yaşında Gazi Mustafa Kemal Paşa’yı Kocataş Yalısı’nın balkonundan konuşurken seyretmiş, sonra onun manevi kızlarıyla aynı okulda okumuş bir Cumhuriyet çocuğu…Ermeni Katolik bir ailenin kızı olarak doğan Liji Pulcu, Sarıyer’deki çocukluk günlerinden Osmanbey’deki ilk gençlik yıllarına uzanan dönemi dostlukları, komşulukları, okul hayatı, mesire gezileri ile renkli biçimde anlatıyor.Kendi anılarına nokta koyduktan sonra da, Şişli–Tünel hattındaki semtleri resmediyor. Bu semtlerin sakinlerinin, gündelik hayatının, alışveriş dünyasının, eğlence ve kültür çevrelerinin bir panoramasını çiziyor.İstanbul’da Kayıp Zamanlar, bu kadim şehrin yakın tarihine dair bellek tazelerken, kimileri az bilinen anekdotları kayda geçiyor: Adları sularla anılan sayısız mesireden, sokak eğlencelerine; Menderes’in imar faaliyetlerinden, AKM’nin on yıllar süren inşaatına; Türklerin, Fransızların, Rumların, Ermenilerin, Rusların ve Lehlerin sıcak bir öğrenci dayanışması içinde okuduğu Notre Dame de Sion’dan, Berna Moran ve Halide Edip’in öğrencileri büyülediği Edebiyat Fakültesi’ne… "
        }
    ],
    [
        86,
        {
            "isbn": "978-9754586749 ",
            "title": " İstanbul’da İşgal Yılları",
            "original-title": "İstanbul’da İşgal Yılları (1918-1923) ",
            "original-language": "TR-OTA ",
            "originally-published": 2006,
            "written-by": [
                { "name": " İ. Hakkı Sunata", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["Memoir ", " History"],
            "language": " TR",
            "publisher": " Türkiye İş Bankası Kültür Yayınları ",
            "edition": "11th ",
            "summary": " 15 Mayıs günü Yunanlılar İzmir’e asker çıkarmış. Bu, o gün öğleden sonra dedikodu kabilinden söylenmeye başladı. 16 Mayıs tarihli gazetelerde bunun doğruluğu ortaya çıktı…Dedikodular sürüp gidiyor: Yunanlıların asker çıkarması üzerine İzmir’de büyük bir ihtilâl çıktığı, bizden 600 kadar ölü olduğu, bu miktardan fazla da Yunanlı öldüğü ve bu harekete 300 kadar kadının da katıldığı söyleniyor…İki günden beri Yunanlıların Karadeniz kıyılarında bazı yerlere asker çıkaracağı söyleniyor. Düşmanın bu hareketleri karşısında İstanbul’da kollarım bağlı durmak, ne can sıkıcı durum. İlk imkânı bulunca o tarafa geçmeye kararlıyım…Eylülün yedisi oldu. Bir haftadır sonsuz bir sevincin saadeti içindeyiz. Bütün endişe ve sıkıntıyı unuttuk. Hastalık, parasızlık, ıstırap, düşmanlık, gelecek endişesi, her şey, her şey unutuldu. Yalnız Anadolu Zaferi ve Yunan yenilgisi… "
        }
    ],
    [
        87,
        {
            "isbn": "978-6254297489 ",
            "title": " Yakın Tarihte Gördüklerim ve Geçirdiklerim – Cilt I:1888-1918",
            "original-title": " Yakın Tarihte Gördüklerim ve Geçirdiklerim ",
            "original-language": "TR-OTA",
            "originally-published": 1970,
            "written-by": [
                { "name": " Ahmet Emin Yalman", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Memoir", "History "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "1th ",
            "summary": " Bu kitapta son yetmiş yıl içinde memlekette ve dünyada olup bitenlerin hikâyesini, hepsinin yakından görgü şahidi olan bir gazetecinin ağzından dinleyeceksiniz. Gördüklerimi ve geçirdiklerimi bu şekilde anlatabilmiş olmayı uzun ve velveleli gazetecilik hayatım için iyi bir son sayarım.” Ahmet Emin Yalman’ın, yaşamının son yıllarında kaleme aldığı anılarının bu ilk cildinde, yazarın çocukluk yıllarından Mondros Mütarekesi’ne kadarki dönem aktarılıyor.Yalman, Osmanlı İmparatorluğu’nda hürriyet seslerinin yükseldiği bir ortamda, çok istediği gazetecilik mesleğine başlar. İkinci Meşrutiyet’in ilanı, 31 Mart vakası ve II. Abdülhamit’in tahttan indirilmesi, Trablusgarp ve Balkan savaşları, Birinci Dünya Savaşı ve Mondros Mütarekesi gibi art arda gelişen siyasal ve toplumsal olayların yakından tanığı olur. İmparatorluğun son günlerinde gazetecilik yapmanın zorluklarının anlatıldığı bu ilk cildin ardından, Yalman, sonraki ciltlerde, 1970’lere kadar ülkemizde yaşanan siyasi ve toplumsal olayları yine kendine özgü kalemiyle aktaracak. "
        }
    ],
    [
        88,
        {
            "isbn": "978-6257999656 ",
            "title": "Paşam Nereye Kadar Çekileceğiz? ",
            "original-title": "Paşam Nereye Kadar Çekileceğiz? ",
            "original-language": " TR-OTA",
            "originally-published": 1970,
            "written-by": [
                { "name": " Mehmet Dürdali Karasan", "role": "Author " },
                { "name": " Şeref Karabağ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Memoir", " History"],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 3th",
            "summary": " Antalya Darülmuallimin Mektebi’ne gidebilmesi için yaşı, ailesi tarafından üç yaş büyütülen Dürdali Karasan, henüz 14’ünde ve ikinci sınıf öğrencisiyken, “onbeşliler” olarak bilinen 1315 (1899-1900) doğumlularla askere alınır. İstanbul İhtiyat Zabiti Talimgâhı’nda aldığı kısa eğitimin ardından 1916’da Suriye-Filistin Cephesi’ne gönderilir. Birüssebi-Gazze Meydan Muharebesi’nde yaralanarak bir süre hastanede tedavi görür. Aynı cephede katıldığı Nablus Meydan Muharebesi’nde esir düşer ve Mısır Seydibeşir Esir Kampı’nda iki yıl sürecek esaret günleri başlar. Savaşın ardından, ailesi şehit düştüğünü düşünürken, zorluklar içinde Kalkan’daki evine ulaşır ama kısa süre sonra Mayıs 1921’de İstiklal Harbi’ne çağrılır. 9 Eylül 1922’de İzmir’e giren ilk askerler arasındadır. Üçüncü kez askere alındığında yıl 1942’dir. Dürdali Karasan’ın, 1918’de Filistin Cephesi’ndeyken, Sekizinci Ordu Komutanı Cevat Paşa’ya sorduğu Paşam Nereye Kadar Çekileceğiz? sorusu, bu anılara da adını veriyor. Dostu Cevat Şakir Kabaağaçlı’nın daktilo ettiği metin, 67 yıllık ömründe üç kez askere alınan Dürdali Karasan’ın çocukluğu, zorlu savaş dönemi, esaret günleri ve maceralı yaşamının yanı sıra, iç ve dış siyasi gelişmelere ilişkin değerlendirmelerini de içeriyor "
        }
    ],
    [
        89,
        {
            "isbn": "978-6057838322 ",
            "title": " İşgal Günlerinde İstanbul",
            "original-title": "İşgal Günlerinde İstanbul ",
            "original-language": " TR-OTA",
            "originally-published": 2010,
            "written-by": [
                { "name": "Hakkı Süha Gezgin", "role": "Author " },
                { "name": "Nuri Sağlam ", "role": "Translator/Compiler" },
            ],
            "print-year": 2019,
            "genre": [" Memoir", " History"],
            "language": "TR ",
            "publisher": "Kapı Yayınları ",
            "edition": " 1th",
            "summary": " Basın, edebiyat ve kültür tarihimizin önemli simalarından Hakkı Süha Gezgin’in 1920-1923 arasında Vakit gazetesinde “İstanbul Hayatı” üst başlığı altında yayımladığı yazı dizisi, ilk defa bu kitapta Nuri Sağlam’ın titiz çalışmasıyla bugünün okuruna sunuluyor.İşgal günlerinde, İstanbul moral değerleri gözle görülür derecede çökmüştü. Vakit’teki yazılarına böyle bir toplumsal ortamda başlayan Hakkı Süha, söz konusu sürede, şehrin çeşitli semtlerinde pek çok mekânı dolaşarak, farklı toplumsal kesimlerin yaşam şartlarını yakından gözlemlemiş, görüp işittikleriyle beraber bizzat kendisinin de maruz kaldığı muhtelif olayları sıcağı sıcağına dile getirmiştir. Hakkı Süha Gezgin’in günümüzden yaklaşık yüz yıl önce kaleme aldığı bu yazılar, İstanbul’un ufkunu genişletiyor. "
        }
    ],
    [
        90,
        {
            "isbn": " 978-6051066493",
            "title": "Zeki Paşa'nın Balkan Hatıratı ",
            "original-title": "Balkan Harbi Hatıratı ",
            "original-language": "TR-OTA",
            "originally-published": 1974,
            "written-by": [
                { "name": " Zeki Paşa", "role": "Author " },
                { "name": "Sema Demirtaş", "role": "Translator/Compiler" },
            ],
            "print-year": 2012,
            "genre": ["Memoir", "History"],
            "language": "TR",
            "publisher": "ALFA YAYINLARI ",
            "edition": "1th ",
            "summary": " Siyaseti idare edenlerin, bir savaş başlamadan önce askerî duruma tamamen vakıf olması ve bunun için de barış zamanında Dışişleri ve Genelkurmayın birbiriyle sürekli bağlantı kurması gerekir. Bu önemli nokta maalesef bizde henüz anlaşılamamıştır.Ordumuzda, gelişme ve ilerleme görüldüğü ve her şeyin yolunda gittiğinin zannedildiği bir dönemde yenilgimize bir türlü anlam verilememiş, felakete uğramamızın sebepleri de bazılarınca kesinlikle anlaşılamamıştı. Bu savaşla ilgili önemli gördüğüm bazı hu¬susları yayınlarsam, komuta ettiğim Vardar Ordusunun harekât ve faaliyetleri hakkında doğru bilgilendirmenin mümkün olacağı ve gelecek için ders çıkarılacağı inancındayım.-Zeki Paşa "
        }
    ],
    [
        91,
        {
            "isbn": " 	978-9755397542 ",
            "title": "Bir Yeniçerinin Hatıraları ",
            "original-title": "Mémoires d'un Janissaire ",
            "original-language": "CS-PL-FR",
            "originally-published": 1565,
            "written-by": [
                { "name": "Konstantin Mihailoviç ", "role": "Author " },
                { "name": "Nuri Fudayl Kıcıroğlu ", "role": "Translator/Compiler" },
                { "name": "Behiç Anıl Ekim ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Memoir", "History "],
            "language": "TR ",
            "publisher": "Ayrıntı Yayınları ",
            "edition": "3th ",
            "summary": "Sırp Konstantin Mihailoviç İstanbul’un fethinden iki yıl sonra, 1455 yılında, Niş yakınlarındaki köyünden Türkler tarafından alınıp başkente götürülür. Yirmi yaşındaki Mihailoviç kısa süreli bir eğitimden sonra Yeniçeri Ocağı’na kaydedilir ve Osmanlı İmparatorluğu’nun Balkan topraklarından, Ege kıyılarına ve Tuna’ya uzanan fetihlerine, başarısızlığa uğrayan Belgrad Kuşatması’na, 1458 Mora, 1461 Sinop ve 1462’de Uzun Hasan’a karşı yapılan Trabzon Seferi’ne ve daha birçok savaşa katılır.Mihailoviç 1463’te, bir yeniçeriyken bu kez Macarlar tarafından ele geçirilir. Özgürlüğüne kavuştuktan sonra ilkin Bohemya’ya sonra Polonya’ya geçen Mihailoviç, Osmanlı İmparatorluğu’nda bulunduğu süre zarfında yaşadıklarını yazdırır. Tam olarak hangi dilde yazdırıldığı bilinmeyen bu kroniğin bugüne kadar gelen Çek ve Leh versiyonları mevcut olmakla birlikte Sırpça olması gereken orijinali ortalıkta yoktur.Konstantin Mihailoviç hatıratında, on yıl hizmetinde bulunduğu Osmanlıların dinsel yapılarını, kurumlarını, kuruluşundan II. Bayezid’e kadar hanedanın tarihini, imparatorluğun gelenek ve göreneklerini anlatmaktadır. Mihailoviç’in hatıratında tüm bunların yanı sıra, Polonya ve Macaristan krallarının Osmanlılarla yapacakları muhtemel savaşlarda kullanabileceği bilgiler de yer almaktadır.Benzeri bulunmayan tarihi bir kaynak...  "
        }
    ],
    [
        92,
        {
            "isbn": "9786258096705",
            "title": " Hatıralar",
            "original-title": "Mücahede-i Milliye: Tarihçe-i Jön Türk Hareketi ve Tatlı Emeller, Acı Hakikatler",
            "original-language": " TR-OTA ",
            "originally-published": 1908 - 1909,
            "written-by": [
                { "name": "Mizancı Murad ", "role": "Author " },
                { "name": "Evren Levent Demir", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" Memoir", "History "],
            "language": " TR",
            "publisher": " Kapı Yayınları",
            "edition": " 1th",
            "summary": " Turfanda mı Yoksa Turfa mı, hâlâ edebiyatımızın baş eserleri arasında sayılır. Sadece bir romancı değil, çok yönlü bir Osmanlı münevveri olan Mizancı Murad yaşadığı devri içeriden idrak etmiş, canlı tanıklıklarını çarpıcı yorumlara kavuşturmuştur.Şahsi hayatının dalgalanışları arasında her bakımdan çalkantılı bir dönemden geçerken, kendisine özgü ideallerin peşine düşmüş bir ferdin hayatından imparatorluğun neredeyse son zamanlarına keskin projeksiyonlar tutmuştur.Çıkardığı Mîzan isimli gazeteden dolayı ‘Mizancı’ lakabıyla anılan bu ilginç ve çok renkli şahsiyetin anıları bugüne de ışık tutmayı sürdürüyor. "
        }
    ],
    [
        93,
        {
            "isbn": "978-9752430570 ",
            "title": " Osmanlı İmparatorluğu I: Toplum ve Ekonomi",
            "original-title": " Osmanlı İmparatorluğu: Toplum ve Ekonomi",
            "original-language": "TR ",
            "originally-published": 1993,
            "written-by": [
                { "name": " Halil İnalcık", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" History", "Sociology"],
            "language": "TR ",
            "publisher": " Kronik Kitap",
            "edition": "9th ",
            "summary": " Okuyucularımız ilk ciltte Osmanlı toplumunun asli unsurlarından sipahileri ve köylüleri, İslam arazi ve vergi sistemini, raiyyet rüsumunu yeniden tanıyacak. 15. yüzyılda Rumeli topraklarındaki Hristiyan sipahileri ve menşelerini görecek. Fatih devrinden önceki tımar sistemini derinlemesine öğrenecek. Osmanlı'nın kuruluş ve inkişaf devrinden 15. yüzyıla kadar Türk topraklarındaki iktisadi vaziyeti görme imkanı bulacak. Yine bu yüzyılda, tarihimizin mühim şehirlerinden Bursa'nın sanayisine ve ticaretine dair vesikaları okuyacak. Hindistan ve İngiltere ile yaşanan pazar rekabeti, örfi-sultani hukuk ile Fatih'in kanunları, Sened-i İttifak, Gülhane Hatt-ı Hümayunu, Tanzimat'ın uygulanması ve sosyal tepkileri, batıdan kültür aktarımı gibi birbirinden kritik metinler, bu cildin diğer meseleleri. "
        }
    ],
    [
        94,
        {
            "isbn": "978-9752430587 ",
            "title": " Osmanlı İmparatorluğu I: Sultan ve Siyaset ",
            "original-title": "Halil İnalcık ",
            "original-language": "TR ",
            "originally-published": 2000,
            "written-by": [
                { "name": "Halil İnalcık ", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["History ", "Politics "],
            "language": " TR",
            "publisher": " Kronik Kitap",
            "edition": "9th ",
            "summary": " İkinci cilt, uzun zamandır hararetle tartışılan Osmanlı tarihinde dönemler meselesiyle başlıyor. Hemen ardından İnalcık, Aşıkpaşazade tarihi nasıl okunmalı? diye sorarak tarihyazımı konusunda yine büyük bir açığı kapatıyor. Sultan ve Siyaset başlığı altında Osman Gazi'nin İznik Kuşatması ve Bafeus Savaşı, Fatih Sultan Mehmed devri, Osmanlıların karar alma mekanizmaları, kazasker ruznamçe defterine göre kadılık kurumu, Osmanlı hukukunun İslamlaşması, vergi toplama, Rum Ortodoks patriğinin statüsü gibi konular yer alıyor. Okuyucularımız bu cildin son bölümünde fethedilen Konstantinopolis şehrinin yeniden inşası, Galata'nın Osmanlı şehrine dönüşmesi ve Osmanlıların Karadeniz ve Boğazlar üzerindeki kontrolüne yönelik son derece doyurucu metinlerle karşılaşacaklar. "
        }
    ],
    [
        95,
        {
            "isbn": " 978-6256774407",
            "title": " Osmanlı İmparatorluğu II: Fetih ve Teşkilat",
            "original-title": "Osmanlı İmparatorluğu II: Fetih ve Teşkilat ",
            "original-language": " TR",
            "originally-published": 2007,
            "written-by": [
                { "name": "Halil İnalcık ", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" History", " War"],
            "language": " TR",
            "publisher": "Kronik Kitap ",
            "edition": "1th ",
            "summary": " Okuyucularımız ilk ciltte Osmanlı İmparatorluğu’nun fetih yöntemlerini, yeni fethedilen bölgelerdeki teşkilatlanma siyasetini, toprak meselelerini, ticaretin yaygınlaşmasını, sermaye oluşumunu yakından tanıyacaklar. Modern Avrupa’nın gelişmesinde Türklerin etkilerini, Osmanlı vergilendirme sistemini, toplum yapısının dönüşümünü, Osmanlı iktisadi zihniyetini, ateşli silahların sosyo-politik etkisini ve Tanzimat’ın uyandırdığı sosyal tepkileri görecekler. Edirne’nin fethi, Bursa’nın Doğu Akdeniz ticaretindeki konumu, İnebahtı Savaşı ve Sultan Süleyman’a “Kanuni” ûnvanını kazandıran yasa koyucu faaliyetleri bu cildin diğer meseleleri. "
        }
    ],
    [
        96,
        {
            "isbn": " 978-6256774414",
            "title": "Osmanlı İmparatorluğu II: Devlet ve İdare ",
            "original-title": " Osmanlı İmparatorluğu II: Devlet ve İdare ",
            "original-language": " TR",
            "originally-published": 2005,
            "written-by": [
                { "name": " Halil İnalcık", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["History ", " Politics"],
            "language": "TR ",
            "publisher": " Kronik Kitap",
            "edition": " 1th",
            "summary": "İkinci ciltte ise modern tarihçiliğin hâlâ büyük bir meselesi olan Osmanlı İmparatorluğu’nun ortaya çıkışı ve 17. yüzyılda bu imparatorluğun geçirdiği askerî ve malî dönüşümlere dair büyük bir tarihçinin bakış açısıyla tanışacaklar. İnalcık’ın çalışmalarının temelini oluşturan toprak meselelerine dair kaynak niteliği taşıyan diğer makalelerde ise imparatorluktaki pirinç üretimi, devlet kademelerinden el sanatlarına kadar pek çok alanda rolü olan köle emeği, büyük çiftliklerin ortaya çıkış süreci, İstanbul’un ticari yapısının kalbi olan ve şehrin uluslararası bir ticaret merkezi olmasında büyük önemi bulunan bedestenleri yakından tanıyacaklar. Ayrıca bu ciltte modern tarihçiliğin başat çevrelerinden olan Annales Okulu’nun Osmanlı araştırmalarına etkisi ve ağırlık ile ölçü birimlerinin tartışıldığı Osmanlı metrolojisi çalışmaları da yer alıyor.  "
        }
    ],
    [
        97,
        {
            "isbn": "978-6058301122 ",
            "title": " Osmanlı'da Devlet, Hukuk ve Adalet",
            "original-title": " Osmanlı'da Devlet, Hukuk ve Adalet",
            "original-language": " TR",
            "originally-published": 2000,
            "written-by": [
                { "name": "Halil İnalcık ", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": ["History ", "Politics "],
            "language": "TR ",
            "publisher": "Kronik Kitap ",
            "edition": "17th ",
            "summary": " Altı asır boyunca egemenliğini devlet, hukuk, adalet anlayışıyla sağlayan Osmanlılar, iktidarlarını ise kanun ile ahlak dengesiyle ayakta tutmuşlardır. Batı kaynaklarında Osmanlı halkından herhangi bir kimsenin hükümdarı bile dava edebileceğinden övgüyle bahsedilmiştir. Öte yandan bürokratlar ise hükümdarın asli prensipleri ezip geçmesi karşısında onu tahtından edebilmişlerdir. Hem Osmanlıları 'Devlet-i Aliyye-i Osmâniyye' yapan hem de 'Devlet-i Ebed-müddet' sözünü slogan olmaktan kalıcı bir mekanizma haline getiren düşünce, din ve devletin selameti adına devlet-hukuk-adalet güçlerinin bir direnç unsuru olarak daima bir arada yaşamış ve yaşatılmış olmasıdır.Tarih yazıcılığında çığır açmış olan Halil İnalcık, Osmanlı’da Devlet, Hukuk ve Adâlet kitabında devlet anlayışı, kanun rejimi, kanunların uygulanış biçimi ve adalet yöntemleri üzerine araştırmalarını bir araya getiriyor. Okuyucular kitabı bitirdiklerinde, Osmanlı Devleti’nin birçok millet ve dini altı asır nasıl bir arada tutup idare ettiğini en orijinal bilgiler eşliğinde öğrenmiş olacaklar. "
        }
    ],
    [
        98,
        {
            "isbn": "  	9786257548960",
            "title": " ENVER",
            "original-title": "ENVER ",
            "original-language": "TR ",
            "originally-published": 2015,
            "written-by": [
                { "name": " Murat Bardakçı", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Biography", " History "],
            "language": " TR",
            "publisher": " Turkuvaz Kitap",
            "edition": " 2th",
            "summary": " İstanbul’da mütevazi bir ahşap evde başlayıp Hürriyet Kahramanlığı’na ve imparatorluğun en güçlü adamlığına uzanan ama ardından idam mahkûmluğuna ve sürgünlere kadar giden, 1922’de uzak diyarların haritalarda bile yeralmayan ücra bir tepesinde Rus süvarisinin namlusundan çıkan domdom kurşunu ile noktalanan 41 senelik macera dolu bir hayat…Enver Paşa Türkçü-Turancı mı, yoksa İslâmcı mı idi? İstiklâl Harbi yıllarında neler yapmıştı? Mustafa Kemal ile mektuplaşmaları… Sıkıntılar ve hayallerle dolu sürgün seneleri… Orta Asya’daki esareti ve uğradığı mağlûbiyet… Hanımı, büyük aşkı Naciye Sultan’a hasret satırları…Murat Bardakçı’nın, Paşa’nın ailesi tarafından doksan küsur sene boyunca muhafaza edilen ve şimdiye kadar yayınlanmamış özel evrakı ile sivil ve askerî arşiv belgelerine dayanarak kaleme aldığı Enver, tarihimizin bu çok önemli ismini her yönü ile ortaya koyarken, onun hakkında yanlış bilinen birçok konunun gerçeğini de gözler önüne seriyor."
        }
    ],
    [
        99,
        {
            "isbn": " 978-6256548169",
            "title": " MAKBULE",
            "original-title": "MAKBULE ",
            "original-language": " TR",
            "originally-published": 2024,
            "written-by": [
                { "name": "Murat Bardakçı ", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Biography", " History"],
            "language": "TR ",
            "publisher": " Turkuvaz Kitap",
            "edition": " 1th",
            "summary": "Ali Rıza Efendi ile Zübeyde Hanım’ın altı çocukları oldu: 1870’lerin başında Fatma, 1874’te Ahmet, 1875’te Ömer, sonra Mustafa, 1885’te Makbule ve 1889’da da Naciye..Bu çocuklardan dördü küçük yaşlarda vefat ettiler ve sadece ikisi, Mustafa ile Makbule hayatta kalabildi...Mustafa’nın ismine ileriki senelerde Kemal adı da ilâve edilecek ve tarihe Mustafa Kemal diye geçecekti...Makbule hiç okula gitmedi, okuma-yazmayı bile çok sonraları öğrendi ve hayatını ağabeyinin gölgesinde, onun sağladığı maddî imkânlar ile sürdürdü. Ağabeyinin vefatının ardından 18 sene daha yaşadı ama maddî sıkıntıya düştü, son yıllarında devletin bağladığı 1000 lira vatanî hizmet maaşı ile geçinmeye çalıştı ve doğduğu günden itibaren çilelerle dolu hayatı 18 Ocak 1956’da Ankara’da, Gülhane Askerî Hastahanesi’nin bir odasında noktalandı.Bu kitap hep arka plânda kalıp gösterişsiz bir hayat yaşayan Makbule Hanım ile kocasının, yani Atatürk’ün eniştesi Mustafa Mecdi Boysan’ın belgelere dayalı hüzünlü hikâyesidir. "
        }
    ],
    [
        100,
        {
            "isbn": " 978-6256967724",
            "title": "Balkanlar 1804-2012 : İmparatorlukların Çöküşünden Ulusların Yükselişine Avrupa Türkiye'sinin Tarihi ",
            "original-title": "The Balkans: Nationalism, War, and the Great Powers, 1804–2012 ",
            "original-language": "EN ",
            "originally-published": 2012,
            "written-by": [
                { "name": "Misha Glenny ", "role": "Author " },
                { "name": "Bilal Yakup ", "role": "Translator/Compiler" },
                { "name": "M. Nuri Demirli ", "role": "Translator/Compiler" },
                { "name": "M. Serhat Karakan", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["History ", "War "],
            "language": " TR",
            "publisher": " Selenge Yayınları",
            "edition": " 1th",
            "summary": "Kayıplar, İşgaller ve Milliyetçilik, Misha Glenny, Balkanlar deyince akla ilk gelen bu kelimeler üzerine inşa ettiği eserinde, Avrupa'nın güneydoğu kıyısındaki ülkelerin dış dünya tarafından nasıl görüldüğünü ve son iki yüz yılın hikâyesinin gerçekte nasıl şaşırtıcı olduğunu daha önce hiç bilinmeyen ayrıntılarla gözler önüne seriyor. Ezelî düşman sandığımız kesimler asırlarca kendilerinden hiç beklenmeyen ittifaklar kurarak, Balkanlar'daki çatışmaların kadim nefretlerin kaçınılmaz bir ürünü olduğu fikrini nasıl altüst ettiler? İşte Balkanlar ile Avrupa'nın geri kalanı arasında felaketle sonuçlanan bir ilişki, Batı'nın müdahalesi açısından çok derin sorular barındıran karanlık bir tarih de var karşımızda "
        }
    ],
    [
        101,
        {
            "isbn": "978-6257631198 ",
            "title": "Theophanes Confessor'ün Kroniğinde Türkler: 284-813 Avrupa Hunları Ak Hunlar Sabirler Avarlar Bulgarlar Hazarlar",
            "original-title": " Χρονογραφία- Theophanous tou Homologitou Chronographia",
            "original-language": " GR ",
            "originally-published": 813,
            "written-by": [
                { "name": "Theophanes Confessor ", "role": "Author " },
                { "name": " Hatice Aydın ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": ["History ", "Turkish History "],
            "language": "TR ",
            "publisher": " KRONİK KİTAP ",
            "edition": "4th ",
            "summary": " BİR BİZANS KRONİĞİNDE DOĞU AVRUPA TÜRKLERİ…Bin yılı aşkın tarihi ile dünyanın en uzun süre hüküm süren devleti unvanına sahip Bizans İmparatorluğu, tarih yazma geleneği ile de dikkat çekmektedir. Neredeyse hiç boşluk bırakmadan art arda kaleme alınan Bizans kronikleri sadece Roma ve Avrupa tarihine değil aynı zamanda dünyanın birçok devlet ve kavminin tarihine de ışık tutmaktadır. İşte bu kroniklerden biri de Bizans kronikleri içerisinde hacim ve önem itibariyle ilk sırada yer alan, aynı zamanda Bizans tarihçiliğini zirveye taşıyan Theophanes’in kroniğidir.Theophanes’in hem dünyevî hem de dinî tarih bilgilerini bir araya getirmek suretiyle 810-814 yılları arasında kaleme aldığı kroniği, M.S. 284-813 yılları arasındaki süreci kapsamakta ve bir Dünya Tarihi niteliği taşımaktadır. Kroniğin en çarpıcı özelliği; sadece Bizans imparatorluk yıllıklarını değil, aynı zamanda Hıristiyan Doğu’ya ait kaynakları da ihtivâ etmesi, yine bu kaynakların büyük bir kısmının zaman içerisinde yok olması ve barındırdıkları bilginin bu kronik yoluyla günümüze ulaşmış olması gerçeğidir.Sadece Roma, Bizans, Türk, Arap ve İran tarihi için değil, aynı zamanda İslâm ve Hıristiyanlık tarihi için de hazine değerine sahip bir kaynak olarak Theophanes’in kroniği Avrupa Hunları, Sabirler, Avarlar, Bulgarlar ve Hazarlar gibi Doğu Avrupa Türkleri’nin yanı sıra Türkistan sahasında hüküm sürmüş Ak Hunlar hakkında da yoğun bilgi sunmakta, bu da kroniği Türk Tarihi açısından da eşsiz kılmaktadır.Hatice Aydın’ın hazırlayıp çevirdiği ve notlandırdığı “Theophanes Confessor’ün Kroniğinde Türkler: 284-813”, Doğu Avrupa Türk Tarihi’ne dâir bir başvuru eseri, Türk Tarihi tutkunlarına ve Türk ilim âlemine bir armağan "
        }
    ],
    [
        102,
        {
            "isbn": "978-6257705363 ",
            "title": " Geleceği Anlamak İçin Yakın Tarih Dersleri",
            "original-title": " Geleceği Anlamak İçin Yakın Tarih Dersleri",
            "original-language": " TR",
            "originally-published": 2021,
            "written-by": [
                { "name": "Erhan Afyoncu ", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["History "],
            "language": "TR ",
            "publisher": "YEDİTEPE YAYINEVİ ",
            "edition": "6th ",
            "summary": " Günümüzde cereyan eden birçok mesele geçen asırda da hemen hemen aynı şekilde yaşanmıştı. Başta devlet adamlarımız olmak üzere okuma-yazma bilen her Türk’ün imparatorluğun 19. yüzyıl ve 20. yüzyılın başındaki dağılma sürecini, ayakta kalabilmek için yaptığımız mücadeleyi, izlediğimiz yanlış siyasetler ve yaptığımız hatalar ile o dönemde Avrupa’nın bize karşı izlediği siyaseti bütün teferruatıyla okuması gerekir.Bu kitapta Osmanlı İmparatorluğu’nun son döneminde yaşanan ve günümüzde de yansımaları olan ilginç hadiseleri okuyacaksınız. "
        }
    ],
    [
        103,
        {
            "isbn": "978-6050946635 ",
            "title": "Sultan ve Müneccimi ",
            "original-title": " İlm-i Nücûm and its Role in the Eighteenth Century Ottoman Court",
            "original-language": "EN ",
            "originally-published": 2017,
            "written-by": [
                { "name": " R. Hakan Kırkoğlu ", "role": "Author " },
                { "name": " Saadet Özen", "role": "Translator/Compiler" },
            ],
            "print-year": 2017,
            "genre": [" History", "Metaphysics"],
            "language": " TR",
            "publisher": " DOĞAN KİTAP",
            "edition": " 1th",
            "summary": " 18. yüzyılda Osmanlı sarayında ilm-i nücûmun, yani astrolojinin, kurumsal düzeyde icra edilişi ve bir “devlet memuru” olarak müneccimbaşının varlığı bugün birçok kişiyi şaşırtabilir.30 yılı aşkın süredir ülkemizde astroloji alanındaki çalışmalarıyla tanınan R. Hakan Kırkoğlu yaptığı değerli araştırmayla, şimdiye kadar pek incelenmemiş bir alana girerek, bize Osmanlı sarayında astrolojinin ne için ve nasıl kullanıldığını, müneccimbaşının hangi sınırlar içinde hareket ettiğini gösteriyor.Kırkoğlu, üç padişah eskiterek 26 yıl boyunca müneccimbaşılık görevinde kalabilen Fethiyeli Halil Efendi (1699-1773) üzerinden Osmanlı ulemasının ilm-i nücûma bakışı ve Osmanlı sarayında siyaset ile kehanet arasındaki ilişkiyi maharetle ortaya koyuyor. "
        }
    ],
    [
        104,
        {
            "isbn": "978-6057635402 ",
            "title": "Bunu Herkes Bilir: Tarihte Yanlış Sorulara Doğru Cevaplar ",
            "original-title": "Bunu Herkes Bilir: Tarihte Yanlış Sorulara Doğru Cevaplar ",
            "original-language": " TR",
            "originally-published": 2020,
            "written-by": [
                { "name": " Emrah Safa Gürkan", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" History", " "],
            "language": " TR",
            "publisher": "KRONİK KİTAP ",
            "edition": "13th ",
            "summary": "Elinizdeki kitap size tarihin şifrelerini, El Dorado’nun yerini, Karındeşen Jack’in kim olduğunu ya da simya taşının hikmetini öğretmeyecek. Karşınıza pavyonlarda sürten altıncı Dalai Lama, genç kalmak için altın içen Diane de Poitiers, teslim ol çağrısına orta parmaklarını işaret ve yüzük parmaklarının arasına sokup sallamak suretiyle cevap veren Venedik garnizonu, erkek kılığına girip tüm Siena’yı elden geçiren çapkın travesti Caterina Vizzani, bir köşede hacetini gideren Evliya’nın üstüne düşüp onu “boklu gazi” yapan düşman da çıkmayacak.Bu, kahramanlarla hainlerin, tarihin akışını değiştiren vizyonerlerle fırsatları tepen basiretsiz liderlerin kitabı değil. Küçük Buzul Çağı, Fiyat ve Sanayi devrimleri, Aydınlanma, Atlantik Üçgeni, Büyük Kırılma, Hümanizma, muhayyel cemaatler, Protestan Etiği gibi birçok kavramın havada uçuştuğu sayfalarımızda kopuşları değil, devamlılıkları göreceksiniz. Tarihi bir anda değiştiren olayların aslında semptomlarını kaplumbağa hızıyla gösteren süreçlerin birer sonucu olduğunu fark edeceksiniz.Herkesin hafife aldığı şu grotesk tarih kortejinin birbirinden ilginç kahramanlarının yaratacağı hafif bir tebessümden ve sıra dışı anekdotların verdiği şaşkınlıktan daha fazlasını hedefliyoruz: Okuyucunun geçmişini ve bugününü daha iyi kavrayıp geleceğini daha iyi planlamasını sağlamak ve ona entelektüel bir derinlik kazandırarak daha kaliteli bir yaşam sürmesine yardımcı olmak.Emrah Safa Gürkan’ın mizahla zekâyı buluşturduğu Bunu Herkes Bilir, hangi yaşta olursa olsun kendini geliştirmek için öğrenmeye zaman ayıranların zevkle okuyacağı bir başucu eseri…  "
        }
    ],
    [
        105,
        {
            "isbn": "978-9750760730",
            "title": "Türkiye'nin İlk Yılları ",
            "original-title": " Gazi Mustafa Kemal Tarafından Fırkasının İkinci Büyük Kongresinde İrat Olunan Nutuk (Kısaca Nutuk)",
            "original-language": " TR",
            "originally-published": 1927,
            "written-by": [
                { "name": "Mustafa Kemal Atatürk ", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" History", " Turkish History"],
            "language": " TR",
            "publisher": "CAN YAYINLARI ",
            "edition": " 4th",
            "summary": "Türkiye’nin İlk Yılları, Atatürk’ün 1924-1938 arasında yaptığı, büyük çoğunluğu meclis açılış konuşmalarından oluşan bir kitap. Yeni kurulan Türkiye Cumhuriyeti’ndeki tüm yenilikleri, eğitimden sanayiye, tarımdan şehirciliğe, ekonomiden diplomatik ilişkilere tüm gelişmeleri, kısacası bir ülkenin kendini var etme çabasını yıl yıl, adım adım kurucusunun ağzından dinliyoruz.Mustafa Kemal Atatürk’ün 1 Mart 1924’te Millet Meclisi kürsüsünden yaptığı konuşmayla açılan bu kitap, 1 Kasım 1938’de Atatürk adına Celal Bayar’ın okuduğu nutukla son buluyor.  "
        }
    ],
    [
        106,
        {
            "isbn": "978-9750760723 ",
            "title": " Türkiye'nin Geleceği",
            "original-title": "Türkiye'nin Geleceği ",
            "original-language": "TR ",
            "originally-published": 1923,
            "written-by": [
                { "name": "Mustafa Kemal Atatürk ", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["History ", "Turkish History "],
            "language": "TR ",
            "publisher": "CAN YAYINLARI ",
            "edition": "5th ",
            "summary": "Mustafa Kemal Atatürk’ün, 2 Şubat 1923’te İzmir’de yaptığı bu konuşma, nutuktan çok bir liderin halkıyla sohbeti olarak okunabilir. İzmir’in kurtuluşundan kısa bir süre sonra yapılan bu toplantıda Atatürk, farklı kesimlerden insanlara hayalindeki Türkiye’yi anlatır, eğitimden kadın haklarına, dinden askeriyeye çeşitli konulardaki düşüncelerini halkla paylaşır.İzmir konuşması, büyük badireler atlatmış bir halkın lideriyle samimi ilişkisini, liderin halkına hesap verebilirliğini göstermesi açısından da önemli bir belge.  "
        }
    ],
    [
        107,
        {
            "isbn": "  	978-9754033175",
            "title": "Boylam ",
            "original-title": "The Illustrated Longitude: The True Story of a Lone Genius Who Solved the Greatest Scientific Problem of His Time ",
            "original-language": " EN",
            "originally-published": 1998,
            "written-by": [
                { "name": "Dava Sobel ", "role": "Author " },
                { "name": "William J. H. Andrewes ", "role": "Author " },
                { "name": " Miyase Göktepeli", "role": "Translator/Compiler" },
            ],
            "print-year": 2004,
            "genre": ["science ", "Mathematics ", "Engineering", "Maritime"],
            "language": "TR ",
            "publisher": "TÜBİTAK YAYINLARI ",
            "edition": "3th ",
            "summary": "Boylam on yedinci ve on sekizinci yüzyılın en zorlu bilimsel problemini çözme yolundaki çabaları anlatıyor.Büyük keşif çağı boyunca denizciler okyanuslarda bulundukları boylamı hesaplayabilecekleri herhangi bir araç olmadan dolaştılar. Pek çok bilim adamı boylam sorununun gökyüzündeki yıldızların düzenli olarak gözlenmesiyle çözüleceğini düşünür ve bu yolda araştırmalar yaparken, John Harrison adında bir adam inanılmazı yaptı: Bugün kronometre dediğimiz, denizde zamanı kesin olarak bilmeye yarayan bir saat. İşte bu kitabın konusu Harrison'ın bu yoldaki kırk yıl süren çabası.   "
        }
    ],
    [
        108,
        {
            "isbn": "978-6052996140 ",
            "title": "Çöküş: Toplumlar Başarısızlığı ya da Başarıyı Nasıl Seçerler? ",
            "original-title": "Collapse: How Societies Choose to Fail or Succeed ",
            "original-language": " EN",
            "originally-published": 2005,
            "written-by": [
                { "name": " Jared Diamond ", "role": "Author " },
                { "name": " Barış Baysal", "role": "Translator/Compiler" },
            ],
            "print-year": 2019,
            "genre": [" History", "World History", "Geography", "Anthropology", " Science "],
            "language": "TR ",
            "publisher": " PEGASUS YAYINLARI",
            "edition": " 1th",
            "summary": "Viraneye dönmüş Maya piramitlerinin mimarları nerede? Paskalya Adası’nın terk edilmiş heykellerini yapanlara ne oldu? Gökdelenlerimiz Angkor Vat’ın tapınakları misali yerle yeksan mı olacak? Geleceği şekillendirmiş bazı toplumlar iflas ederken bazı toplumlar neden zenginleşti? Yayımlandığı günden bu yana dünyada büyük ses getiren Tüfek, Mikrop ve Çelik’te Jared Diamond, Batı uygarlığının, dünyanın büyük bir kısmına hâkim olmasını sağlayan ayrıcalıkları ve teknolojiyi nasıl kazandığını incelemişti. Çöküş’te ise, madalyonun diğer yüzünü aydınlatıyor: Geçmişin büyük uygarlıklarından bazılarının yıkılmasına neden olan şey neydi? Yıkılan bu kadim uygarlıkların kaderlerinden neler öğrenebiliriz? Çevreye verilen zarar, iklim değişikliği, küreselleşme, hızlı nüfus artışı ve politik çatışmalar, dünyanın dört bir yanındaki toplumların yok olmasına neden olan faktörlerdi ancak bu toplumlardan bazıları kendi çözümlerini yarattı. Bugün pek çok ülke benzer sorunlarla karşı karşıya. Çin ve Avustralya bu sorunlarla yenilikçi yollarla baş etmeye çalışırken Ruanda ve Haiti gibi ülkeler felaketlerin altından kalkamıyor.Şaşırtıcı miktarda kaynaktan elde ettiği yeni kanıtları derleyip toplayıp bir yapbozun parçalarını bir araya getirir gibi işleyerek toplumların kendilerini yok etmeyi tercih etmelerinin nedenlerini sorgulayan Çöküş, atalarımızın mahrum olduğu bir şeyi; geçmişimizden nasıl yararlanabileceğimizi ve hayatta kalmak için neler yapabileceğimizi gözler önüne seriyor. "
        }
    ],
    [
        109,
        {
            "isbn": "978-6052997468 ",
            "title": "Yükseliş Krizdeki Uluslar İçin Dönüm Noktaları ",
            "original-title": "Upheaval: Turning Points for Nations in Crisis ",
            "original-language": " EN",
            "originally-published": 2019,
            "written-by": [
                { "name": "Jared Diamond", "role": "Author " },
                { "name": "Barış Baysal", "role": "Translator/Compiler" },
            ],
            "print-year": 2019,
            "genre": [" History", "World History", "Sociology", "Anthropology"],
            "language": "TR ",
            "publisher": "PEGASUS YAYINLARI ",
            "edition": "1th ",
            "summary": "Diamond, yakın geçmişe yaptığı bu sürükleyici yolculuğunda, altı ülkenin nasıl hayatta kaldığını karşılaştırmalı olarak ele alıyor: Tuğamiral Perry’nin donanmasının Japonya’nın dış dünyaya açılmasındaki etkisi neydi? Sovyetlerin Finlandiya’yı işgali nelere mal oldu? Şili’nin acımasız Pinochet rejimi nasıl bir tahribat yarattı? Endonezya’daki kanlı darbe ve karşı darbenin sonuçlarıyla nasıl yüzleşildi? İkinci Dünya Savaşı’ndan sonra Almanya ve Avustralya nasıl bir dönüşüm sürecine girdi? Muhtelif zamanlarda bu altı ülkenin beşinde bizzat yaşamış ve onların dillerini öğrenerek kültürlerine nüfuz etmiş olan Diamond, bu ulusların yürek sızlatan nev-i şahsına münhasır tarihlerini bizzat tespit ediyor. Bu uluslar; sorumluluk almak, acılarıyla yüzleşmek ve diğer ulusların deneyimlerinden yararlanmak gibi yöntemleri kullanarak farklı düzeylerde olsa da krizlerle başa çıkabildiler.Gelmekte olanı gören Diamond, Birleşik Devletler’in, Japonya’nın ve dünyanın mevcut krizlerle başa çıkıp çıkamayacağını sorguluyor. Sahi, geçmişten ders alabilir miyiz?   "
        }
    ],
    [
        110,
        {
            "isbn": "978-6052994580",
            "title": " Tüfek, Mikrop ve Çelik ",
            "original-title": " Guns, Germs, and Steel",
            "original-language": "EN ",
            "originally-published": 1997,
            "written-by": [
                { "name": " Jared Diamond", "role": "Author " },
                { "name": " Ülker İnce ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": [" History", "World History", " Geography", " Ethnology", "Evolution"],
            "language": "TR ",
            "publisher": " PEGASUS YAYINLARI",
            "edition": "2th ",
            "summary": "Dünya üzerinde yaşayan bütün insanların 13.000 yıllık tarihi…İnsanlık tarihi, devletler, savaşlar, keşifler, icatlar ve yeniliklerle doludur. İmparatorluklar kurulup yıkılırken, tarihin seyrini değiştiren, kıtaların kaderlerini belirleyen olaylar yaşandı. Ancak insanlık tarihi nasıl başladı ve nasıl şekillendi? Anadolu ve Orta Doğu coğrafyası tarihin akışında neden bu kadar önemli? Neden Avrasya’da atlar evcilleştirilebilirken Afrika’da zebralar evcilleştirilemedi? Neden Amerika kıtasının yerlileri Avrupa’yı istila etmedi de tersi oldu? Neden bazı toplumlar zenginken diğerleri fakir kaldı?Tüfek, Mikrop ve Çelik, insanlık tarihinin en can alıcı ve önemli sorularını soran ve bilimsel kanıtlarla yanıtlayan muhteşem bir eser. Biyoloji, coğrafya, dilbilim ve tarih gibi birçok alandan yararlanarak yazılmış, “Batılı” koşullandırmalardan arınmış, geleceği gösteren bir tarih kitabı.Dinlerin nasıl doğduğu, devletlerin nasıl kurulduğu, mikropların ve onlara bağlı hastalıkların nasıl oluştuğu, tarım ve hayvancılığın hayatımızdaki önemi, yazının neden icat edildiği, insanoğlunun teknolojiyi nasıl ve neden geliştirdiği, insanlık tarihinin temellerinin neler olduğu ayrıntılarıyla bu kitapta inceleniyor. Ve tüm hikâye bundan 13.000 yıl önce Orta Doğu’da yaşayan bir insanın bir buğday tanesini toprağa ekmesiyle başlıyor."
        }
    ],
    [
        111,
        {
            "isbn": "978-6055029746 ",
            "title": " Homo Deus: Yarının Kısa Bir Tarihi ",
            "original-title": "  (ההיסטוריה של המחר ) Ha-Historia Shel Ha-Mahar  - Homo Deus: A Brief History of Tomorrow ",
            "original-language": " İL, EN, ",
            "originally-published": 2015 - 2016,
            "written-by": [
                { "name": "Yuval Noah Harari ", "role": "Author " },
                { "name": " Poyzan Nur Taneli ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": [" History", " World History", " Sociology ", "Anthropology ",],
            "language": "TR ",
            "publisher": "KOLEKTİF KİTAP ",
            "edition": "6th ",
            "summary": "Hayvanlardan Tanrılara: Sapiens kitabıyla insan türünün dünyaya nasıl egemen olduğunu anlatan Harari, Homo Deus’ta çarpıcı öngörüleriyle yarınımızı ele alıyor. İnsanlığın ölümsüzlük, mutluluk ve tanrısallık peşindeki yolculuğunu bilim, tarih ve felsefe ışığında incelediği bu çalışmasında, insanın bambaşka bir türe, Homo deus’a evrildiği bir gelecek kurguluyor.Yola “önemsiz bir hayvan” olarak çıkan Homo sapiens, tanrılar katına ulaşmak uğruna kendi sonunu mu hazırlıyor?Homo sapiens nasıl oldu da evrenin insan türünün etrafında döndüğünü iddia eden hümanist öğretiye inandı?Bu öğreti gündelik yaşantımızı, sanatımızı ve en gizli tutkularımızı nasıl şekillendiriyor?İnsanı inekler, tavuklar, şempanzeler ve bilgisayar programlarının tümünden ayıran yüksek zekası ve kudreti dışında herhangi bir alametifarikası var mı?Tarih boyunca benzeri görülmemiş kazanımlar elde etmemize rağmen mutluluk seviyemizde neden kayda değer bir artış olmadı?Tüm bunları anlamak için tek yapmamız gereken geriye dönüp bakmak ve Homo sapiens’in aslında ne olduğunu, hümanizmin nasıl dünyaya hakim bir din hâline geldiğini ve hümanizm rüyasını gerçekleştirmeye çalışmanın aslında neden insanlığın kendi sonunu getireceğini incelemektir. İşte bu kitabın temel meselesi budur.  "
        }
    ],
    [
        112,
        {
            "isbn": "978-9757004462 ",
            "title": " Hemen Her Şeyin Kısa Tarihi",
            "original-title": " A Short History of Nearly Everything",
            "original-language": " EN",
            "originally-published": 2003,
            "written-by": [
                { "name": "Bill Bryson", "role": "Author " },
                { "name": "Handan Balkara  Çevikus ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" Science", "History ", "Physics ", "Astronomy "],
            "language": " TR",
            "publisher": " BOYNER YAYINLARI",
            "edition": "4th ",
            "summary": "ill Bryson, kendini dünyanın yaşayan ve yaşamayan en değerli bilim adamlarının rehberliğine teslim ediyor. Jeoloji, kimya, paleonloloji, astronomi ve parçacık fiziği gibi konuları, öğrenciliğinde fen derslerinden fena halde sıkılan (ya da ödü patlayan), kendisi gibi insanlar için anlaşılabilir kılmanın bir yolunu bulabileceğine inanıyor. Yalnızca ne bildiğimizi değil, bunları nasıl bildiğimizi de öğrenmek isityor: -Bilimadamları yerkürenin ağırlığını nasıl ölçerler?  -Arzın merkezini, okyanusların dibini, uzayın derinliklerini nasıl gözlemlerler? -Evrenin nasıl ve ne zaman oluştuğunu nasıl bilirler? -Bir alomun içinde neler olup bittiğini nasıl anlarlar?  Bill Bryson, uzay ve zamanda yaptığı yolculuklarda, aklındaki zor soruları yönetebileceği bir sürü olağanüstü insanın yanı sıra, son derece eksantrik ve hırslı şahsiyetlerle de karşılaşıyor. Onlarla beraber, insanlığın bilgi aleminde bazen son derece derin, bazen komik, ama her zaman son derece anlaşılır ve eğlendirici bir maceraya atılıyor ve bu macerayı büyük bir akılcılıkla aktarıyor.Bu kitabı okuduğunuzda bilimin hiç bu kadar sürükleyici, üstünde yaşadığımız dünyanın hiç bu kadar ilginç ve keyifli olmadığını fark edeceksiniz.  "
        }
    ],
    [
        113,
        {
            "isbn": " 978-6254144455",
            "title": " Tuz Üzerinden Dünya Tarihi",
            "original-title": " Salt: A World History",
            "original-language": " EN",
            "originally-published": 2002,
            "written-by": [
                { "name": "Mark Kurlansky ", "role": "Author " },
                { "name": "Selim Sezer", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" History", "World History", " Food History ",],
            "language": " TR",
            "publisher": "Epsilon Yayınevi ",
            "edition": " 1th",
            "summary": "Mark Kurlansky’den dünya tarihine büyüleyici bir yolculuk! Herkesin mutfağında bulunan ve günlük hayatımızın sıradan bir bileşeni gibi görünen tuz, aslında insanlık tarihinin en etkileyici ve en zengin öykülerinden birini saklıyor. Araştırmacı gazeteci-yazar Mark Kurlansky de bu inanılmaz maddeyi mercek altına alarak tuzun sıradanlığının altında yatan derin kültürel, ekonomik ve tarihsel bağları açığa çıkarıyor.Tuz, zamanında uygarlıkların yükselişini ve çöküşünü belirleyen bir güç simgesiydi. Antik Roma’dan Ortaçağ Avrupası’na, Amerika’nın köle ticareti tarihinden Hindistan’ın bağımsızlık mücadelesine kadar tuzun hiçbir zaman küçümsenemeyecek kadar önemli bir rolü vardı. Tuzun bu akılalmaz yolculuğu, binlerce yıldır çıkarıldığı yerlerden, ticaret yollarında taşındığılimanlara kadar pek çok tarih sahnesine sebep oldu.Bu kitap, tuzun dünyayı nasıl şekillendirdiğini ve toplumların üzerindeki etkilerini derinlemesine inceleyerek sizleri tarihsel ve kültürel bir yolculuğa davet ederken Kurlansky’nin sürükleyici anlatımı da tuzun gizemli dünyasına ve insanlığın tuzla olan bağına dair yeni bir bakış sunuyor.Tuz Üzerinden Dünya Tarihi hem tarih meraklıları hem de yemek tutkunları için muhteşem bir kaynak. Tuzun geçmişten günümüze uzanan serüvenini keşfedin ve dünyayı bir de tuzun gözünden görün!  "
        }
    ],
    [
        114,
        {
            "isbn": " 	978-6059915960 ",
            "title": "Büyük İskender ",
            "original-title": "Alexander the Great ",
            "original-language": " EN",
            "originally-published": 2011,
            "written-by": [
                { "name": " Philip Freeman ", "role": "Author " },
                { "name": " Cemal Can Tarımcıoğlu", "role": "Translator/Compiler" },
            ],
            "print-year": 2021,
            "genre": ["Biography ", " History"],
            "language": " TR",
            "publisher": "KANES YAYINLARI ",
            "edition": " 1th",
            "summary": " Büyük İskender merhametli veya zalim, sağduyulu ya da fevri olabilirdi; ancak hepsinden öte, baş edilemeyecek kadar rekabetçi bir lider, kaybetmeye tahammülü olmayan bir fatihti.Nitekim kaybettiği zamanlar sayılıdır.Makedonya kraliyet ailesinin prensi olarak dünyaya gelen İskender, çağın en büyük filozofu Aristoteles’ten eğitim aldı. Ordusunun başına geçtiğinde, tüm dünyanın korkulu rüyası Pers İmparatorluğu’na karşı savaş başlattı. Persleri mağlup ettikten sonra sınırlarını Mısır’ın çöllerinden Hindistan’ın düzlüklerine kadar genişletti.Tarihin en unutulmaz figürlerinden biri olan Büyük İskender’in meşhur komutanlık yetenekleri, strateji ve taktik geliştirmek için Hannibal’dan Napolyon’a kadar ve daha pek çok lider tarafından iki bin yıldır mercek altına alınmıştır. Özellikle İskender’in karakterine ve kişisel yönüne ışık tutan bu yetkin biyografik eserde Philip Freeman, onun insanı hayrette bırakan başarılarına ve dinamik mizacına odaklanmaktadır. "
        }
    ],
    [
        115,
        {
            "isbn": " 978-9752430419",
            "title": " Cengiz Han",
            "original-title": "Genghis Khan and the Making of the Modern World ",
            "original-language": "EN ",
            "originally-published": 2004,
            "written-by": [
                { "name": " Jack Weatherford", "role": "Author " },
                { "name": "Sermin Karakale ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Biography", " History"],
            "language": "TR ",
            "publisher": " KRONİK KİTAP",
            "edition": " 12th",
            "summary": "Dünya tarihinde çok az lider Cengiz Han kadar farklı unvanlara sahip olmuştur. Bir kısım tarihçiler tarafından barbar ve gaddar olarak anlatılan Cengiz Han, diğer tarihçilerin sayfalarında cesur bir hükümdar ya da efsane bir imparator olarak geçer. Şu bir gerçektir ki Cengiz Han hem oldukça gizemli bir karaktere hem de nice toprakları atlarıyla ezip geçmiş devasa bir orduya sahip olmuştur. Bu ordu çoğu zaman haritaların ve nüfus hareketlerinin değişmesine, hatta son yapılan araştırmalara göre geri dönüşü olmayan iklim ve çevre değişikliklerine bile sebep olmuştur.Cengiz Han, çocuk yaşlarından itibaren korkusuzca savaşmayı, acımasız bir ortamda hırs, azim ve cesaret gibi bir savaşçının olmazsa olmaz özelliklerini tüm detaylarıyla öğrenmiştir. Kudreti hâlâ çözülememiş bir askeri teşkilât ile benzeri görülmemiş bir posta ağı kuracak kadar ilim ve teknik merakıyla yetişmiştir. Son derece farklı âdetlere ve kanunlara sahip Moğol tarihinin bu unutulmaz ismine dair araştırmalar gün geçtikçe daha fazla popüler olmaktadır. Özellikle savaş ve devlet yönetimi tarihi denince, Cengiz Han’dan bahsedilmemesi imkânsızdır.Moğolistan’daki Cengiz Han Üniversitesi’nden İnsanlık Bilimi Doktorluk unvanı almış, dünyaca ünlü bir araştırmacı olan Jack Weatherford, bu kitabında Cengiz Han ve onun torunlarının şaşırtıcı hikâyesinin ve fetihlerinin izini sürüyor.  "
        }
    ],
    [
        116,
        {
            "isbn": "  	978-9752430020",
            "title": " Timurlenk : Bozkırların Son Göçebe Fatihi",
            "original-title": "The Rise and Rule of Tamerlane ",
            "original-language": "EN ",
            "originally-published": 1989,
            "written-by": [
                { "name": " Beatrice Forbes Manz ", "role": "Author " },
                { "name": "Zuhal Bilgin ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Biography ", "History "],
            "language": " TR",
            "publisher": "KRONİK KİTAP ",
            "edition": "19th ",
            "summary": " ORTA ASYA VE ORTA DOĞU’YA HÂKİM BİR HÜKÜMDAR, KÜÇÜK ASYA’YA KADAR SAVAŞMIŞ BİR FATİH: TİMUR.  Avrasya’nın her köşesinde bir kasırga gibi esen Timurlenk, bozkır fatihlerinin sonuncusuydu. Dünya tarihinde ömrünün neredeyse tamamını seferlerde geçirmiş savaşçı-hükümdar karakteri için akla gelen ilk isimlerdendir. “Kuvveti sonsuz” olarak nitelendirilen ordularıyla 1382’den 1405’e kadar çok geniş toprakların tozunu dumana katmıştır. Delhi’den Moskova’ya, Orta Asya’dan Tanrı Dağları’na, Anadolu ve Toroslar üzerinden Avrasya’ya kadar yeni fetihler için karşısına çıkan güçleri hallaç pamuğu gibi oradan oraya savurmuştur. Şüphe yok ki birçok kadim şehri de yerle bir etmiş, bazılarını ise kudretinden esirgemiştir.Uzun yıllar boyunca inşa ettiği Türk-Moğol kültürü, ölümünden sonra yerini Türk-İslam kültürüne bırakmış ve Osmanlılar, Safevîler, Babürlüler gibi büyük imparatorluklar için ilham kaynağı olmuştur. Timur’un (Aksak Timur, Timurlenk, Temür) destansı ismi tarihteki unutulmaz yerini almıştır.Beatrice Forbes Manz, bu çalışmasında Timur’u bir göçebe hanedanın kurucusu ve çok yetenekli bir insan olarak ele alırken devlet kurma mekanizmaları, kabile politikalarının dinamikleri ve kişisel yönetimin doğası gibi daha geniş konuları da tartışmaya açıyor. Timur’un iktidara geldiği kabile konfederasyonu içindeki siyasi kültürü inceleyerek, Timur’un gevşek ve isyankâr bir yapıyı tek bir kişiye itaate dayalı disiplinli bir ordu haline nasıl getirdiğini araştırıyor. "
        }
    ],
    [
        118,
        {
            "isbn": "  	978-6256228023",
            "title": " Antik İnançların İzinde: Mezopotamya'da Mitler ve Ritüeller",
            "original-title": "Antik İnançların İzinde: Mezopotamya'da Mitler ve Ritüeller ",
            "original-language": "TR ",
            "originally-published": 2024,
            "written-by": [
                { "name": "  Kürşad Demirci", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": [" History", "Religion", " Mythology",],
            "language": "TR ",
            "publisher": "KRONİK KİTAP ",
            "edition": "3th",
            "summary": "Atalar kültü nedir ve bugün Türklerde nasıl yaşıyor? Antik inançlara göre insan ve dünya nasıl yaratıldı? Sihirli çember ritüelleri hangi toplumlarda önemliydi ve bu ritüellerin işlevi neydi? Eski Mezopotamya’daki dinî ritüellerin günümüzdeki izleri nelerdir? Dinler tarihi, arkeoloji ve antropolojinin kesiştiği noktada yer alan bu kapsamlı eser, sizi binlerce yıllık inanç sistemlerinin kökenlerine götürürken Mezopotamya’nın dinî ve kültürel hayatını şekillendiren inanç sistemlerinin ardındaki sembolleri, ritüelleri ve mitleri okuyacaksınız "
        }
    ],
    [
        119,
        {
            "isbn": "978-6059328548",
            "title": "Susam ve Zambaklar : Kitaplara ve Kadınlara Dair ",
            "original-title": "Sesame and Lilies ",
            "original-language": "EN ",
            "originally-published": 1864,
            "written-by": [
                { "name": " John Ruskin", "role": "Author " },
                { "name": "Türkan Turgut ", "role": "Translator/Compiler" },
            ],
            "print-year": 2020,
            "genre": [" Literature", "Essay "],
            "language": " TR",
            "publisher": "DOĞU BATI YAYINLARI ",
            "edition": " 2th",
            "summary": " Açıl susam, açıl! İşte kralların hazinelerini açan ve kraliçelerin bahçelerine götüren sihirli formül! Proust ve daha pek çok yazarın hayran olduğu John Ruskin’in düşüncesinde ve onun ince ve zarif üslubuyla: Susam ve Zambaklar...Ne okumalı, nasıl okumalı ve neden okumalı? Hayatta şu veya bu mevkiyi sağlayacak ve insanlara sadece bilmediklerini öğreten bir eğitimle kendisini bir yığından farksız hale getiren bir ulus devam edemez. Zamanın ihtiyaçlarına uygun öğretimin yanında iyi düzenlenmiş ve yönetilmiş bir ahlâki eğitim ve iyi seçilmiş eserleri okumak, ne derece mükemmel bir şekilde gerçekleşirse insanlar arasında varolabilecek krallıkların en mükemmeline de böylece ulaşılmış olur. İşte bu, hayatta büyük olmak demektir. Hayatın süslü, debdebeli taraflarında değil de, hayatın ta kendisinde ilerlemek, gerçek mânâda “Ha­yatta ilerlemek”tir.Ve zambaklar… yani eğer kadınlar, iyilikle, tatlılıkla, hoşluk ve zariflikle muhteşem bir şekilde güçlü olmanın önemini anlamış ve bu güçlerini gerektiği şekilde kullanmayı öğrenmişlerse, bu derece güzel ve iyi, bu kadar yumuşak bir gücün sağlamış olduğu hoşluk ve düzen, iyi bir eğitim, faydalı ve seçkin eserlerle birlikte yüce kalpli, âlicenap insanların birarada yaşayacağı büyük milletlerin de önünü açacak demektir. "
        }
    ],
    [
        120,
        {
            "isbn": "978-9750748684 ",
            "title": "Sisifos Söyleni ",
            "original-title": "Le Mythe de Sisyphe  ",
            "original-language": " FR",
            "originally-published": 1942,
            "written-by": [
                { "name": "Albert Camus ", "role": "Author " },
                { "name": "Tahsin Yücel  ", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": ["Philosophy", "Literature "],
            "language": " TR",
            "publisher": "Can Yayınları  ",
            "edition": "59th ",
            "summary": "Gerçekten önemli olan bir tek felsefe sorunu vardır, intihar. Yaşamın yaşanmaya değip değmediği konusunda bir yargıya varmak, felsefenin temel sorusuna yanıt vermektir.Tanrılar tarafından, her defasında yeniden aşağı yuvarlanacak olan taşı tepeye çıkarmakla cezalandırılan Sisifos, taşı belirlenen noktaya çıkarırken yeniden aşağıya düşeceğini bilse de onu taşımaya devam eder. Sisifos, Camus için bir kahramandır. Onun tek başına didinmesi bile varoluşun anlamsızlığına karşı bir direniştir.Yabancı romanında okuduğumuz uyumsuzluk duygusu, 20. yüzyıl felsefe tarihinin en mühim metinlerinden biri kabul edilen Sisifos Söyleni’nde düşünsel zeminini bulur. Absürde karşın yaşamayı, başkaldırmanın gerekliliğini savunan Camus uyumsuz kavramını burada somutlaştırır: İnsan öncelikle uyumsuzluğun bilincine varmak zorundadır ve bütün bu anlamsızlığa rağmen direnmeyi seçmelidir.  "
        }
    ],
    [
        121,
        {
            "isbn": "978-9755748009",
            "title": "Dinler Tarihinin Meseleleri ",
            "original-title": "Dinler Tarihinin Meseleleri ",
            "original-language": " TR",
            "originally-published": 1997,
            "written-by": [
                { "name": "Kürşad Demirci ", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" History", " History of religions", "Religion", " Mythology", "Philosophy",],
            "language": "TR ",
            "publisher": " İNSAN YAYINLARI ",
            "edition": " 6th",
            "summary": "Dinler tarihi alanında akademik çalışmalarıyla tanınan Kürşat Demirci, elinizdeki bu eseriyle tarih boyunca ortaya çıkan Dinler Tarihindeki meseleleri, bu meselelere yaklaşımların temel mantığından yola çıkarak tartışır. Dinler Tarihi araştırmalarındaki tasvirî yaklaşımlara teorik bir zemin kazandırma gayreti ile kaleme alınan bu eser; kutsal, mitoloji, semboller gibi dinî fenomenler üzerine çalışan sosyal bilimleri de ilgilendiren ilginç tespitlerde bulunuyor.Yazara göre, dinler tarihi çalışmaları milattan önce 5. yüzyıla, Greklere kadar uzanan bir süreci kapsamaktadır. Bu süreçte din bilimlerinden olan dinler tarihi, hem dinin hem de bilimin kullandığı kavramların etkisinde bugünlere gelmiştir. Elinizdeki eser de yukarıdaki süreci esas alarak dinlerin kökeni, mahiyeti ve geleceği konusunda yapılan çalışmaları anlamlı bir bütün halinde sunmayı amaçlamaktadır.  "
        }
    ],
    [
        122,
        {
            "isbn": "978-9756336175 ",
            "title": "Eski Mezopotamya Dinlerine Giriş: Tanrılar, Ritüel, Tapınak ",
            "original-title": " Eski Mezopotamya Dinlerine Giriş: Tanrılar, Ritüel, Tapınak",
            "original-language": " TR",
            "originally-published": 2013,
            "written-by": [
                { "name": "Kürşad Demirci ", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" History", " History of religions", "Religion", " Mythology", "Philosophy",],
            "language": " TR",
            "publisher": "AYIŞIĞI KİTAPLARI ",
            "edition": " 6th",
            "summary": "Birbirinden farklı pek çok dine kaynaklık teşkil eden Mezopotamya inançlarının önemli bir kısmı politeist özelliklere sahiptir. Sümerlerden başlayan bu çok dinsel fenomen hala antik çağ Mezopotamya’sından bir mira, üzerinde yaşayanlarca harcanmaktadır. Türkiye’de bölgenin arkeolojik yapısına yönelik çalışmalar varsa da, dinler tarihi bağlamında ciddi araştırmalar son derece azdır. İşte elinizdeki kitap böyle bir kaygıdan doğmuştur. Amacı Mezopotamya dinlerini kısmen de olsa analitik bir perspektiften tanıtmaktır. Büyük oranda Sümer, Asur, Babil dinleri ele alınmıştır. Yeri geldiğinde Yahudilik ile ilgili paralellikler de kurulmaya çalışılmıştır.  "
        }
    ],
    [
        123,
        {
            "isbn": "978-9753423984 ",
            "title": " İnsan Olmak",
            "original-title": "İnsan Olmak ",
            "original-language": " TR",
            "originally-published": 1983,
            "written-by": [
                { "name": " Engin Geçtan ", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": ["Psychology ", " Psychiatry"],
            "language": "TR ",
            "publisher": " METİS YAYINLARI",
            "edition": "30th ",
            "summary": " İlk kez yayımlandığı 1983'ten günümüze defalarca baskı yapmış ve okurla kurduğu yapıcı ilişkiyi kanıtlamış olan bu kitabında Engin Geçtan insan olmanın ikilemini şöyle anlatır: 'Çağdaş toplumlar kendine özgü bir olguyu da birlikte getirmiştir. İnsan eskisinden çok daha fazla sayıda insanla, çok daha kısa süreli, daha yüzeysel ilişkiler kurma eğilimindedir. Bu, soğuk bir günde karşılaşan bir grup kirpinin öyküsüne benzer. Kirpiler ısınabilmek için birbirlerine sokulurlar, ama dikenleri birbirine batar. Birbirlerinden ayrıldıklarındaysa soğuktan rahatsız olurlar. İleri geri hareket ederes sonunda dikenlerini batırmadan birbirlerini ısıtabilecekleri en uygun uzaklığı bulurlar.' "
        }
    ],
    [
        124,
        {
            "isbn": "978-9753633246 ",
            "title": " Hegel / Bilinç Problemi, Köle-Efendi Diyalektiği, Praksis Felsefesi",
            "original-title": "Hegel / Bilinç Problemi, Köle-Efendi Diyalektiği, Praksis Felsefesi ",
            "original-language": " TR",
            "originally-published": 1991,
            "written-by": [
                { "name": " Tülin Bumin ", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": ["Philosophy ", "Academic "],
            "language": "TR ",
            "publisher": " Yapı Kredi Yayınları",
            "edition": " 9th",
            "summary": "Bu kitapta Tülin Bumin, Hegel'i felsefi bir antropolojinin yazarı olarak incelerken, Hegel'in dünyayı ve insanı bir bütün olarak ele alışında ve bu duruşun oluşturduğu özbilinç anlayışında, zamanı için kılan bir özgürlük felsefesine dikkat çekiyor.Hegel'in Fransız düşüncesindeki etkilerini, Köle-Efendi diyalektiğini ve devlet kuramını, bu bakış açısıyla yeniden okumak, felsefe tarihine Descartes'ın ve Kant'ın mirası olan ikicilikleri aşmakta ve eylem ile düşüncenin birlikteliğini kavramakta yararlı kapılar açacaktır.  "
        }
    ],
    [
        125,
        {
            "isbn": "978-6052361771 ",
            "title": "Beyaz Diş ",
            "original-title": "White Fang ",
            "original-language": "EN ",
            "originally-published": 1906,
            "written-by": [
                { "name": "Jack London ", "role": "Author " },
                { "name": "Belgin Selen Haktanır ", "role": "Translator/Compiler" },
            ],
            "print-year": 2021,
            "genre": [" Novel ", "Nature ", "Adventure "],
            "language": " TR",
            "publisher": " İNDİGO KİTAP ",
            "edition": "11th ",
            "summary": "Jack London, ilk kez 1906 yılında The Outing Magazine adlı dergiye seriler halinde yazdığı bu eserinde, hareketi sevmeyen ve yaşama dair en ufak bir devinimi bile yok etmeyi amaçlayan Vahşi Doğa'da dünyaya gelmiş Beyaz Diş adlı bir kurt köpeğinin hikâyesini anlatır.Beyaz Diş güçlüdür, çünkü yüreği donmuş Kuzey topraklarında ailesi içinde bir o hayatta kalmayı başarabilmiş ve Vahşi Doğa'nın et yasasını (ye yoksa yem olursun) çabucak öğrenmiştir. Çok geçmeden insan-tanrıların arasına karışacak ve yeni tanrılarına karşı içinde en ufak bir sevgi kırıntısı olmasa da onların yasalarına itaat etmenin kendisi için daha iyi olacağını öğrenecektir. Beyaz Diş'in çevresi acımasız ve taş kalpli tanrılarla çevrildiği için hamurunda hırçınlık vardır. Peki, günün birinde doğasını yumuşatacak ve kalbini ısıtacak sevgi dolu bir efendiyle tanışma şansına erişecek midir?  "
        }
    ],
    [
        126,
        {
            "isbn": "978-9750726439",
            "title": "Simyacı",
            "original-title": "O Alquimista ",
            "original-language": "PT",
            "originally-published": 1988,
            "written-by": [
                { "name": " Paulo Coelho ", "role": "Author " },
                { "name": " Özdemir İnce", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["Literature ", "World Literature", "Novel",],
            "language": "TR",
            "publisher": "CAN YAYINLARI",
            "edition": "165th",
            "summary": "Simyacı, Brezilyalı eski şarkı sözü yazarı Paulo Coelho'nun, yayınlandığı 1988 yılından bu yana dünyayı birbirine katan, eleştirmenler tarafından bir `fenomen' olarak değerlendirilen üçüncü romanı. Simyacı, altı yılda kırk iki ülkede yedi milyondan fazla sattı. Bu, Gabriel Garcia Marquez'den bu yana görülmemiş bir olay. Yüreğinde, çocukluğunu yitirmemiş olan okurlar için bir `klasik' kimliği kazanan Simyacı'yı Saint-Exupery'nin Küçük Prens'i ve Richard Bach'ın Martı Jonathan Livingston'u ile karşılaştıranlar var (Publishers Weekly). Simyacı, İspanya'dan kalkıp Mısır Piramitlerinin eteklerinde hazinesini aramaya giden Endülüslü çoban Santiago'nun masalsı yaşamının felsefi öyküsü. Sanki bir `nasihatnâme': `Yazgına nasıl egemen olacaksın, mutluluğunu nasıl kuracaksın?' sorularına yanıt arayan bir hayat ve ahlak kılavuzu. Mistik bir peri masalına benzeyen romanın altı yılda, yedi milyondan fazla okur bulmasının gizi, kuşkusuz, onun bu kılavuzluk niteliğinden kaynaklanıyor. Simyacı'yı okumak, herkes daha uykudayken, güneşin doğuşunu seyretmek için şafak vakti uyanmaya benziyor.  "
        }
    ],
    [
        127,
        {
            "isbn": "978-6254080975 ",
            "title": "Ruh Adam  ",
            "original-title": "Ruh Adam  ",
            "original-language": "TR ",
            "originally-published": 1972,
            "written-by": [
                { "name": "  Hüseyin Nihal Atsız", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2021,
            "genre": ["Literature ", " Turkish Literature ", " Novel",],
            "language": "TR",
            "publisher": "ÖTÜKEN NEŞRİYAT ",
            "edition": "4th ",
            "summary": "Türk edebiyatında pek alışılmamış çeşitte bir romandır. Müellifin tarihî romanlarını okumuş olanlar, tarihî bir roman gibi başlayan bu eserin öyle olmadığını görecek, sayfalar ilerledikçe kendilerini aşırı bir sembolizmin içinde bulacaklardır.Bir tarih çeşnisinin de yer aldığı roman, yaşamanın gayesini yalnızca askerlikte bulan bir subayın hayatıdır. Tabiatüstü olaylarla anlatılan bir hayat hikâyesinin, dikkatle bakıldığı zaman, gerçeklerin sembollerle çerçevelenmiş ifadesinden başka bir şey olmadığı görülecektir.«Ruh Adam», kendi nefsi ile mücadele eden bir insanın macerasıdır. Edebî-ruhî tahlilini yapanlar, eserin hakikaten bir roman mı, yoksa yaşanmış bir hayat mı olduğunu kestirmekte hayli tereddüde düşeceklerdir.  "
        }
    ],
    [
        128,
        {
            "isbn": " 978-6257607018",
            "title": " Evliya Çelebi Seyahatnamesi I.",
            "original-title": "  ",
            "original-language": "TR-OTA ",
            "originally-published": 1640 - 1685,
            "written-by": [
                { "name": " Evliya Çelebi ", "role": "Author " },
                { "name": "Dr. Mümin Çevik ", "role": "Translator/Compiler" },
            ],
            "print-year": 2021,
            "genre": [" Travel", "History "],
            "language": " TR",
            "publisher": " ÜÇDAL NEŞRİYAT",
            "edition": "N/A ",
            "summary": "Evliya Çelebi'nin bir rüyadaki niyazıyla başlayan seyahati O'nu ebediyete kadar yaşatacak seyahatnamesini bırakarak Hakka yürümesine vesile oldu.2011 yılı Evliya Çelebi'nin doğumunun 400. yılı. Evliya Çelebi yalnız Türk milletinin seyyahı ve kültür insanı değil; O dünyanın bir seyyahı ve kültür insanıdır. Onun içindir ki, UNESCO 2011 yılını 'Evliya çelebi'yi Anma Yılı' ilan etmiştir.On cilt halinde 'Tam Metin Evliya Çelebi Seyahatnamesi'ni bundan 40 yıl önce yayınlamaya başladık. Bugüne kadar binlerce takım kütüphane ve kitaplıklarda yerini aldı.'  "
        }
    ],
    [
        129,
        {
            "isbn": "978-6256324695 ",
            "title": "Sarayın Gözleri: Osmanlı'nın İlk Fotoğrafçılarından Sébah - Joaillier'nin Hikayesi",
            "original-title": " ",
            "original-language": "TR ",
            "originally-published": 2025,
            "written-by": [
                { "name": " Fabrizio Casaretto ", "role": "Author " },
                { "name": " ", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": ["Historical Novel ", " "],
            "language": "TR ",
            "publisher": "MUNDİ KİTAP",
            "edition": "1th ",
            "summary": " Marsilya, Cenova, Halep, İstanbul… İtalyan, Fransız, Ermeni, Yahudi, Rum, Türk… Gemiler, yolculuklar, karşılaşmalar… Tarihî bir roman tadında, geniş Osmanlı coğrafyasının özeti gibi bir aile: Sarayın Gözleri, Osmanlı’nın ilk fotoğrafhanelerinden biri olan Sébah&Joaillier’nin kurucularından Sébah ve Joaillier aileleriyle, 1800’lerde İstanbul’da makarna üretip satmaya başlayan Casaretto ailesinin hikâyesine konuk ediyor bizi. Aşçılık ve kuyumculukla başlayan, sonrasında fotoğrafçılığa da uzanan aile öyküsünün yazarı ise, bu Levanten ailenin halen İstanbul’da yaşayan son temsilcilerinden Fabrizio Casaretto. Büyükannesinin konuştuğu bir video kaydından yola çıkarak aile tarihçesini merakla araştıran, araştırmakla kalmayıp onları birer roman karakterine dönüştüren Casaretto, okuru 19. yüzyıldan 21. yüzyıla uzanan renkli bir dünyaya davet ediyor.Sarayın Gözleri, sarayın resmî fotoğrafçısı olan, sadece İstanbul değil, Bursa ve İzmir gibi birçok şehrimizin ilk panaromik fotoğraflarını çeken, ünlü ressam Osman Hamdi Bey’le birlikte geleneksel kıyafetlerimizi fotoğraflayan, kısaca bize paha biçilemez bir kültür hazinesi miras bırakan Sébah&Joaillier Fotoğrafhanesi ile iki yüz yıldır varlığını bu şehirde sürdüren Casaretto ailesinin yer yer duygusal, yer yer şaşırtıcı anılarıyla bezeli, başka bir “bu topraklar” hikâyesi… "
        }
    ],
    [

        130,
        {
            "isbn": "978-9753429870 ",
            "title": " Film Teorisi: Fiziksel Gerçekliğin Kurtuluşu",
            "original-title": "Theory of Film: The Redemption of Physical Reality ",
            "original-language": " EN",
            "originally-published": 1960,
            "written-by": [
                { "name": "Siegfried Kracauer ", "role": "Author " },
                { "name": " Özge Çelik", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": [" Cinema", " Academic"],
            "language": " TR",
            "publisher": " Metis Yayınları ",
            "edition": "2th ",
            "summary": "Kracauer'in Film Teorisi, alanın kanonik metinlerinden biri. 1960'larda yayımlanan kitabın temelleri esasen daha erken bir tarihte, Kracauer'in film estetiği üzerine kitabı için aldığı notlarla 1940'larda atılıyor. Film Teorisi yazarın daha önce yayımladığımız iki kitabı arasında, “bir çağın tarihsel süreçte tuttuğu yer, o çağın kendisi hakkındaki yargılarından ziyade yalın ve yüzeysel dışavurumlarının analiziyle daha isabetle belirlenebilir” diyen Kitle Süsü ile, “son, nihai şeyleri felsefi veya teolojik sistemler aracılığıyla kavrayabileceğimize inanmadığı için geçici iç görülerle ilgilenen” Tarih: Sondan Bir Önceki Şeyler arasında düşünsel bir köprü kurar. Kitap şu sorunun peşindedir: Film deneyimi neye yarar?  "
        }
    ],

    [
        131,
        {
            "isbn": "978-6257027007 ",
            "title": "Çelik Fırtınalarında ",
            "original-title": "In Stahlgewittern ",
            "original-language": " DE",
            "originally-published": 1920,
            "written-by": [
                { "name": " Ernst Jünger ", "role": "Author " },
                { "name": " Tevfik Turan", "role": "Translator/Compiler" },
            ],
            "print-year": 2019,
            "genre": [" Literature", " German Literature", "Autobiography ",],
            "language": " TR",
            "publisher": " Jaguar Kitap",
            "edition": " 1th",
            "summary": " I. Dünya Savaşı’na genç bir teğmen olarak katılan Alman edebiyatının büyük ve tartışmalı ismi Ernst Jünger, bu savaştan on dört yara, beş madalya ve birçoklarınca “belki de yazılmış en iyi savaş anlatısı” olarak tanımlanan bir başyapıtla, Çelik Fırtınalarında ile döner. Kitap yayımladığında henüz yirmi beş yaşında olan Jünger için, savaş edebiyatına bambaşka bir boyut kazandırmasından dolayı “20. yüzyılın Homeros’u” bile denilmiştir.Çelik Fırtınalarında, yazıldıktan tam bir asır sonra, Tevfik Turan’ın Almanca aslından çevirisiyle ilk kez Türkçede... "
        }
    ],
    [
        132,
        {
            "isbn": "978-6051556079 ",
            "title": " Karamazov Kardeşler(Bratya Karamazovy)",
            "original-title": "Братья Карамазовы ",
            "original-language": " RU",
            "originally-published": 1880,
            "written-by": [
                { "name": "Fyodor Mihayloviç Dostoyevski ", "role": "Author " },
                { "name": " Ender Gürol ", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": [" Literature", " Russian Literature ", " Novel",],
            "language": "TR ",
            "publisher": " Ötüken Neşriyat ",
            "edition": " 6th",
            "summary": " Dünya Klasikleri dendiğinde akla ilk gelen kitaplardan biri hiç şüphesiz Karamazov Kardeşler'dir. Dostoyevski'nin başyapıtı olarak kabul edilen bu eserin yalnızca edebiyatta değil, başta psikoloji olmak üzere çeşitli disiplinlerde büyük etkileri olmuştur. Dostoyevski'nin insana, aileye, Tanrı'ya, devlete ve topluma dair görüşlerinin en berrak ve bir o kadar da girift örneklerini Karamazov Kardeşler'de bulmak mümkün. Dostoyevski sadece insanlar (kahramanlar) arasındaki ilişkileri değil, bu ilişkilerin temelinde yatan saikleri de ayrıntılı bir tahlile tâbi tutar. Bir aile dramının sahnelenmesiyle başlayan eser, her bir aile ferdinin ve dolayısıyla toplumun her bir üyesinin aslında ne kadar trajik bir hayatı olduğunu gösterir. Karamazov Kardeşler sadece romana getirdiği yeni teknik imkânlar açısından değil, insanlar arası gündelik ilişkilerin bütün bir sosyal yapıyı nasıl derinden ve geri dönülemez bir biçimde etkilediğini göstermesi bakımından da klasikler arasındaki yerini muhafaza ediyor. "
        }
    ],
    [
        133,
        {
            "isbn": "978-6258076639 ",
            "title": "Suç ve Ceza ",
            "original-title": "  Преступление и наказание (Prestupleniye i Nakazaniye) ",
            "original-language": " RU ",
            "originally-published": 1866,
            "written-by": [
                { "name": " Fyodor Mihayloviç Dostoyevski", "role": "Author " },
                { "name": "İpek Söylemez ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": [" Literature", "Russian Literature ", " Novel",],
            "language": "TR ",
            "publisher": " KAPRA YAYINCILIK ",
            "edition": "1th ",
            "summary": " Rus ve dünya edebiyatının en önemli eserlerinden biri kabul edilen Suç ve Ceza, Dostoyevski'nin olgunluk çağının bütün ihtişamını sayfalarına sığdırır. Onun gözlem gücü, eleştiriyle kurgusal romanın ahengini yakalama becerisi en çok Suç ve Ceza'da belirginleşir. Raskolnikov'u cinayet işlemeye sürükleyen toplumsal yapıyı ve kahramanın ona taban tabana zıt zihin dünyasını resmeden usta yazar, okurları suçun ahlâki boyutunu sorgulamaya zorluyor. Sonunda nerede olduğunu hatırlamadan oradan uzaklaştı; meydana ulaştığında tüm bedenini, ruhunu kaplayan müthiş bir duyguya kapıldı. Ansızın Sonya'nın sözlerini hatırladı: 'Hemen şimdi bir dört yol ağzına koşun, yere kapanın, kirlettiğiniz toprağı öpün ve dünyanın önünde saygıyla eğilerek 'Ben bir katilim!' diye bağırın!  "
        }
    ],
    [
        134,
        {
            "isbn": "978-6258076646 ",
            "title": "Suç ve Ceza ",
            "original-title": "  Преступление и наказание (Prestupleniye i Nakazaniye) ",
            "original-language": " RU ",
            "originally-published": 1866,
            "written-by": [
                { "name": " Fyodor Mihayloviç Dostoyevski", "role": "Author " },
                { "name": "İpek Söylemez ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": [" Literature", "Russian Literature ", " Novel",],
            "language": "TR ",
            "publisher": " KAPRA YAYINCILIK ",
            "edition": "1th ",
            "summary": " Rus ve dünya edebiyatının en önemli eserlerinden biri kabul edilen Suç ve Ceza, Dostoyevski'nin olgunluk çağının bütün ihtişamını sayfalarına sığdırır. Onun gözlem gücü, eleştiriyle kurgusal romanın ahengini yakalama becerisi en çok Suç ve Ceza'da belirginleşir. Raskolnikov'u cinayet işlemeye sürükleyen toplumsal yapıyı ve kahramanın ona taban tabana zıt zihin dünyasını resmeden usta yazar, okurları suçun ahlâki boyutunu sorgulamaya zorluyor. Sonunda nerede olduğunu hatırlamadan oradan uzaklaştı; meydana ulaştığında tüm bedenini, ruhunu kaplayan müthiş bir duyguya kapıldı. Ansızın Sonya'nın sözlerini hatırladı: 'Hemen şimdi bir dört yol ağzına koşun, yere kapanın, kirlettiğiniz toprağı öpün ve dünyanın önünde saygıyla eğilerek 'Ben bir katilim!' diye bağırın!  "
        }
    ],
    [
        135,
        {
            "isbn": " 978-6258076684",
            "title": "Sefiller I ",
            "original-title": "Les Misérables ",
            "original-language": " FR",
            "originally-published": 1862,
            "written-by": [
                { "name": " Victor Hugo", "role": "Author " },
                { "name": "Semih Atayman ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Literature ", " French Literature ", " Novel",],
            "language": " TR",
            "publisher": " KAPRA YAYINCILIK",
            "edition": "1th ",
            "summary": "Batı edebiyatının en büyük klasiklerinden biri olan Sefiller, yaratıcı zekâ ile yetenek düzleminde büyük bir ustalığın örneğini sunarak, karakter portrelerinin çiziminde ve tarihsel, sosyo-kültürel gerçeğin titiz anlatımında bunu derinden hissettiriyor.  Roman, saçma bir nedenle suçlanan Jean Valjean’ı, sokak çocuğu Gavroche’u, kötülüğün cisim bulmuş örneği Thénardierleri, düzen ve disiplinin hasta ruhlu koruyucusu yalnız adam Javert’i, dinsel bir çilenin simgesi olan sokak kadını Fantine’i ve onun kızı melek Cosette’i dramatik bir gerçeklik içinde anlatmaktadır. Okur, bu karakterlerle birlikte 19. yüzyıl başındaki Fransa’ya doğru bir yolculuğa çıkacak ve Jean Valjean’ın peşinden Paris’in arka sokaklarına giderek yoksulluğun izbe mekânları içinde bir ışık arayacaktır.  "
        }
    ],
    [
        136,
        {
            "isbn": " 978-6258076691",
            "title": "Sefiller II ",
            "original-title": "Les Misérables ",
            "original-language": " FR",
            "originally-published": 1862,
            "written-by": [
                { "name": " Victor Hugo", "role": "Author " },
                { "name": "Semih Atayman ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Literature ", " French Literature ", " Novel",],
            "language": " TR",
            "publisher": " KAPRA YAYINCILIK",
            "edition": "1th ",
            "summary": "Batı edebiyatının en büyük klasiklerinden biri olan Sefiller, yaratıcı zekâ ile yetenek düzleminde büyük bir ustalığın örneğini sunarak, karakter portrelerinin çiziminde ve tarihsel, sosyo-kültürel gerçeğin titiz anlatımında bunu derinden hissettiriyor.  Roman, saçma bir nedenle suçlanan Jean Valjean’ı, sokak çocuğu Gavroche’u, kötülüğün cisim bulmuş örneği Thénardierleri, düzen ve disiplinin hasta ruhlu koruyucusu yalnız adam Javert’i, dinsel bir çilenin simgesi olan sokak kadını Fantine’i ve onun kızı melek Cosette’i dramatik bir gerçeklik içinde anlatmaktadır. Okur, bu karakterlerle birlikte 19. yüzyıl başındaki Fransa’ya doğru bir yolculuğa çıkacak ve Jean Valjean’ın peşinden Paris’in arka sokaklarına giderek yoksulluğun izbe mekânları içinde bir ışık arayacaktır.  "
        }
    ],
    [
        137,
        {
            "isbn": " 978-6258076707",
            "title": "Sefiller III ",
            "original-title": "Les Misérables ",
            "original-language": " FR",
            "originally-published": 1862,
            "written-by": [
                { "name": " Victor Hugo", "role": "Author " },
                { "name": "Semih Atayman ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Literature ", " French Literature ", " Novel",],
            "language": " TR",
            "publisher": " KAPRA YAYINCILIK",
            "edition": "1th ",
            "summary": "Batı edebiyatının en büyük klasiklerinden biri olan Sefiller, yaratıcı zekâ ile yetenek düzleminde büyük bir ustalığın örneğini sunarak, karakter portrelerinin çiziminde ve tarihsel, sosyo-kültürel gerçeğin titiz anlatımında bunu derinden hissettiriyor.  Roman, saçma bir nedenle suçlanan Jean Valjean’ı, sokak çocuğu Gavroche’u, kötülüğün cisim bulmuş örneği Thénardierleri, düzen ve disiplinin hasta ruhlu koruyucusu yalnız adam Javert’i, dinsel bir çilenin simgesi olan sokak kadını Fantine’i ve onun kızı melek Cosette’i dramatik bir gerçeklik içinde anlatmaktadır. Okur, bu karakterlerle birlikte 19. yüzyıl başındaki Fransa’ya doğru bir yolculuğa çıkacak ve Jean Valjean’ın peşinden Paris’in arka sokaklarına giderek yoksulluğun izbe mekânları içinde bir ışık arayacaktır.  "
        }
    ],
    [
        138,
        {
            "isbn": " 978-6258076714",
            "title": "Sefiller IV ",
            "original-title": "Les Misérables ",
            "original-language": " FR",
            "originally-published": 1862,
            "written-by": [
                { "name": " Victor Hugo", "role": "Author " },
                { "name": "Semih Atayman ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Literature ", " French Literature ", " Novel",],
            "language": " TR",
            "publisher": " KAPRA YAYINCILIK",
            "edition": "1th ",
            "summary": "Batı edebiyatının en büyük klasiklerinden biri olan Sefiller, yaratıcı zekâ ile yetenek düzleminde büyük bir ustalığın örneğini sunarak, karakter portrelerinin çiziminde ve tarihsel, sosyo-kültürel gerçeğin titiz anlatımında bunu derinden hissettiriyor.  Roman, saçma bir nedenle suçlanan Jean Valjean’ı, sokak çocuğu Gavroche’u, kötülüğün cisim bulmuş örneği Thénardierleri, düzen ve disiplinin hasta ruhlu koruyucusu yalnız adam Javert’i, dinsel bir çilenin simgesi olan sokak kadını Fantine’i ve onun kızı melek Cosette’i dramatik bir gerçeklik içinde anlatmaktadır. Okur, bu karakterlerle birlikte 19. yüzyıl başındaki Fransa’ya doğru bir yolculuğa çıkacak ve Jean Valjean’ın peşinden Paris’in arka sokaklarına giderek yoksulluğun izbe mekânları içinde bir ışık arayacaktır.  "
        }
    ],
    [
        139,
        {
            "isbn": " 978-6258076721",
            "title": "Sefiller V ",
            "original-title": "Les Misérables ",
            "original-language": "FR",
            "originally-published": 1862,
            "written-by": [
                { "name": "Victor Hugo", "role": "Author " },
                { "name": "Semih Atayman ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Literature ", " French Literature ", " Novel",],
            "language": " TR",
            "publisher": " KAPRA YAYINCILIK",
            "edition": "1th ",
            "summary": "Batı edebiyatının en büyük klasiklerinden biri olan Sefiller, yaratıcı zekâ ile yetenek düzleminde büyük bir ustalığın örneğini sunarak, karakter portrelerinin çiziminde ve tarihsel, sosyo-kültürel gerçeğin titiz anlatımında bunu derinden hissettiriyor.  Roman, saçma bir nedenle suçlanan Jean Valjean’ı, sokak çocuğu Gavroche’u, kötülüğün cisim bulmuş örneği Thénardierleri, düzen ve disiplinin hasta ruhlu koruyucusu yalnız adam Javert’i, dinsel bir çilenin simgesi olan sokak kadını Fantine’i ve onun kızı melek Cosette’i dramatik bir gerçeklik içinde anlatmaktadır. Okur, bu karakterlerle birlikte 19. yüzyıl başındaki Fransa’ya doğru bir yolculuğa çıkacak ve Jean Valjean’ın peşinden Paris’in arka sokaklarına giderek yoksulluğun izbe mekânları içinde bir ışık arayacaktır.  "
        }
    ],
    [
        140,
        {
            "isbn": "978-6051721750 ",
            "title": " Savaş ve Barış I",
            "original-title": "Война и миръ (Voyná i Mir) ",
            "original-language": "RU",
            "originally-published": 1869,
            "written-by": [
                { "name": " Lev Nikolayeviç Tolstoy ", "role": "Author " },
                { "name": " Mete Ergin ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Literature ", "Russian Literature ", " Novel",],
            "language": " TR",
            "publisher": " YORDAM KİTAP",
            "edition": " 5th",
            "summary": " Savaş ve Barış, yazıldıktan kısa bir süre sonra neredeyse tüm dünya dillerine çevrilen, aradan geçen yüz elli yılda evrensel edebiyatın başyapıtı hâline gelen dev bir eser… Bir roman değildir, tarihsel bir anlatı değil, belgesel değil, felsefe kitabı değil, Rus toplumunu anlatan sosyolojik bir inceleme değil, bir dönem romanı, savaş ya da aşk romanı değildir. Çünkü bunların hepsidir Savaş ve Barış.Tolstoy, edebî türlerin sınırlarını aşarak var ettiği bu büyük yapıtla, edebî değerinden, anlatım zenginliğinden bir şey kaybetmeden, farklı coğrafyaların ve çağların sınırlarını da aşıyor. Savaş ve Barış romanında başlıca iki savaş ele alınıyor: 1805-1807 savaşı ve 1812 savaşı. Bu iki savaşın nitelikleri ayrıdır ve Tolstoy özellikle bu büyük çatışmaların farklı özellikleri üzerinde durmuştur.1812 savaşı bir milli kurtuluş savaşı niteliği taşıdığı için, bu savaşa halk yığınları da katılmış ve Tolstoy romanında, halkı da sahneye çıkarmıştır.Yordam Edebiyat olarak, Savaş ve Barış’ı, özel bir edisyonla sunmaktan gurur duyuyoruz. Tüm dünyada ‘en başarılı çeviri’ olarak kabul edilen Louise-Aylmer Maude çevirisi, bizzat Tolstoy’dan edinilen karakter detaylarını ve biyografik bilgileri içermektedir. Böylece bu büyük eseri, âdeta Tolstoy’un rehberliğinde okuma ayrıcalığını yaşayacaksınız.Ayrıca, Hasan Âli Ediz’in başlı başına bir eser olarak kabul edilmesi gereken Tolstoy incelemesini ve Tolstoy’un bu büyük eserini anlattığı kendi yazısını da bu özel edisyonun değerli bir parçası olarak, sizlerle buluşturuyoruz. "
        }
    ],
    [
        141,
        {
            "isbn": "978-6051721767 ",
            "title": " Savaş ve Barış II",
            "original-title": "Война и миръ (Voyná i Mir) ",
            "original-language": "RU",
            "originally-published": 1869,
            "written-by": [
                { "name": " Lev Nikolayeviç Tolstoy ", "role": "Author " },
                { "name": " Mete Ergin ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Literature ", "Russian Literature ", " Novel",],
            "language": " TR",
            "publisher": " YORDAM KİTAP",
            "edition": " 5th",
            "summary": " Savaş ve Barış, yazıldıktan kısa bir süre sonra neredeyse tüm dünya dillerine çevrilen, aradan geçen yüz elli yılda evrensel edebiyatın başyapıtı hâline gelen dev bir eser… Bir roman değildir, tarihsel bir anlatı değil, belgesel değil, felsefe kitabı değil, Rus toplumunu anlatan sosyolojik bir inceleme değil, bir dönem romanı, savaş ya da aşk romanı değildir. Çünkü bunların hepsidir Savaş ve Barış.Tolstoy, edebî türlerin sınırlarını aşarak var ettiği bu büyük yapıtla, edebî değerinden, anlatım zenginliğinden bir şey kaybetmeden, farklı coğrafyaların ve çağların sınırlarını da aşıyor. Savaş ve Barış romanında başlıca iki savaş ele alınıyor: 1805-1807 savaşı ve 1812 savaşı. Bu iki savaşın nitelikleri ayrıdır ve Tolstoy özellikle bu büyük çatışmaların farklı özellikleri üzerinde durmuştur.1812 savaşı bir milli kurtuluş savaşı niteliği taşıdığı için, bu savaşa halk yığınları da katılmış ve Tolstoy romanında, halkı da sahneye çıkarmıştır.Yordam Edebiyat olarak, Savaş ve Barış’ı, özel bir edisyonla sunmaktan gurur duyuyoruz. Tüm dünyada ‘en başarılı çeviri’ olarak kabul edilen Louise-Aylmer Maude çevirisi, bizzat Tolstoy’dan edinilen karakter detaylarını ve biyografik bilgileri içermektedir. Böylece bu büyük eseri, âdeta Tolstoy’un rehberliğinde okuma ayrıcalığını yaşayacaksınız.Ayrıca, Hasan Âli Ediz’in başlı başına bir eser olarak kabul edilmesi gereken Tolstoy incelemesini ve Tolstoy’un bu büyük eserini anlattığı kendi yazısını da bu özel edisyonun değerli bir parçası olarak, sizlerle buluşturuyoruz. "
        }
    ],
    [
        142,
        {
            "isbn": "978-6051721798 ",
            "title": " Savaş ve Barış III",
            "original-title": "Война и миръ (Voyná i Mir) ",
            "original-language": "RU",
            "originally-published": 1869,
            "written-by": [
                { "name": " Lev Nikolayeviç Tolstoy ", "role": "Author " },
                { "name": " Mete Ergin ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Literature ", "Russian Literature ", " Novel",],
            "language": " TR",
            "publisher": " YORDAM KİTAP",
            "edition": " 5th",
            "summary": " Savaş ve Barış, yazıldıktan kısa bir süre sonra neredeyse tüm dünya dillerine çevrilen, aradan geçen yüz elli yılda evrensel edebiyatın başyapıtı hâline gelen dev bir eser… Bir roman değildir, tarihsel bir anlatı değil, belgesel değil, felsefe kitabı değil, Rus toplumunu anlatan sosyolojik bir inceleme değil, bir dönem romanı, savaş ya da aşk romanı değildir. Çünkü bunların hepsidir Savaş ve Barış.Tolstoy, edebî türlerin sınırlarını aşarak var ettiği bu büyük yapıtla, edebî değerinden, anlatım zenginliğinden bir şey kaybetmeden, farklı coğrafyaların ve çağların sınırlarını da aşıyor. Savaş ve Barış romanında başlıca iki savaş ele alınıyor: 1805-1807 savaşı ve 1812 savaşı. Bu iki savaşın nitelikleri ayrıdır ve Tolstoy özellikle bu büyük çatışmaların farklı özellikleri üzerinde durmuştur.1812 savaşı bir milli kurtuluş savaşı niteliği taşıdığı için, bu savaşa halk yığınları da katılmış ve Tolstoy romanında, halkı da sahneye çıkarmıştır.Yordam Edebiyat olarak, Savaş ve Barış’ı, özel bir edisyonla sunmaktan gurur duyuyoruz. Tüm dünyada ‘en başarılı çeviri’ olarak kabul edilen Louise-Aylmer Maude çevirisi, bizzat Tolstoy’dan edinilen karakter detaylarını ve biyografik bilgileri içermektedir. Böylece bu büyük eseri, âdeta Tolstoy’un rehberliğinde okuma ayrıcalığını yaşayacaksınız.Ayrıca, Hasan Âli Ediz’in başlı başına bir eser olarak kabul edilmesi gereken Tolstoy incelemesini ve Tolstoy’un bu büyük eserini anlattığı kendi yazısını da bu özel edisyonun değerli bir parçası olarak, sizlerle buluşturuyoruz. "
        }
    ],
    [
        143,
        {
            "isbn": "978-6051721804 ",
            "title": " Savaş ve Barış IV",
            "original-title": "Война и миръ (Voyná i Mir) ",
            "original-language": "RU",
            "originally-published": 1869,
            "written-by": [
                { "name": " Lev Nikolayeviç Tolstoy ", "role": "Author " },
                { "name": " Mete Ergin ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Literature ", "Russian Literature ", " Novel",],
            "language": " TR",
            "publisher": " YORDAM KİTAP",
            "edition": " 5th",
            "summary": " Savaş ve Barış, yazıldıktan kısa bir süre sonra neredeyse tüm dünya dillerine çevrilen, aradan geçen yüz elli yılda evrensel edebiyatın başyapıtı hâline gelen dev bir eser… Bir roman değildir, tarihsel bir anlatı değil, belgesel değil, felsefe kitabı değil, Rus toplumunu anlatan sosyolojik bir inceleme değil, bir dönem romanı, savaş ya da aşk romanı değildir. Çünkü bunların hepsidir Savaş ve Barış.Tolstoy, edebî türlerin sınırlarını aşarak var ettiği bu büyük yapıtla, edebî değerinden, anlatım zenginliğinden bir şey kaybetmeden, farklı coğrafyaların ve çağların sınırlarını da aşıyor. Savaş ve Barış romanında başlıca iki savaş ele alınıyor: 1805-1807 savaşı ve 1812 savaşı. Bu iki savaşın nitelikleri ayrıdır ve Tolstoy özellikle bu büyük çatışmaların farklı özellikleri üzerinde durmuştur.1812 savaşı bir milli kurtuluş savaşı niteliği taşıdığı için, bu savaşa halk yığınları da katılmış ve Tolstoy romanında, halkı da sahneye çıkarmıştır.Yordam Edebiyat olarak, Savaş ve Barış’ı, özel bir edisyonla sunmaktan gurur duyuyoruz. Tüm dünyada ‘en başarılı çeviri’ olarak kabul edilen Louise-Aylmer Maude çevirisi, bizzat Tolstoy’dan edinilen karakter detaylarını ve biyografik bilgileri içermektedir. Böylece bu büyük eseri, âdeta Tolstoy’un rehberliğinde okuma ayrıcalığını yaşayacaksınız.Ayrıca, Hasan Âli Ediz’in başlı başına bir eser olarak kabul edilmesi gereken Tolstoy incelemesini ve Tolstoy’un bu büyük eserini anlattığı kendi yazısını da bu özel edisyonun değerli bir parçası olarak, sizlerle buluşturuyoruz. "
        }
    ],
    [
        144,
        {
            "isbn": " N/A",
            "title": " Bir Zamanlar Amerika",
            "original-title": "The Hoods ",
            "original-language": " EN",
            "originally-published": 1952,
            "written-by": [
                { "name": "Harry Grey ", "role": "Author " },
                { "name": "MERAL GASPIRALI ", "role": "Translator/Compiler" },
            ],
            "print-year": 1984,
            "genre": [" Novel", " Mafia & Crime"],
            "language": " TR",
            "publisher": "Altın Kitaplar ",
            "edition": "1th ",
            "summary": " New York'un Yasak döneminde Aşağı Doğu Yakası'nda öne çıkan suç ortakları Max, Patsy ve Cockeye'ın anılarıyla boğuşan eski gangster David 'Noodles' Aaronson, 35 yıllık sürgünden sonra Manhattan'a geri döner. Yaşayan tek arkadaşı Fat Moe ile yeniden bir araya gelirken esrarengiz bir deri bavul işleri daha da karmaşık hale getirir. "
        }
    ],
    [
        145,
        {
            "isbn": "978-6052959626 ",
            "title": "Atomcu Felsefe Fragmanları ",
            "original-title": " Fragmenta ",
            "original-language": " GRC",
            "originally-published": -460,
            "written-by": [
                { "name": "Leukippos & Demokritos ", "role": "Author " },
                { "name": "C. Cengiz Çevik ", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": ["Philosophy", "Ancient Greek Classic  "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "5th ",
            "summary": "Leukippos (MÖ V. yüzyıl): Sokrates öncesi felsefe ekollerinden Atomcu Felsefe’nin kurucu figürü olan Leukippos’un hayatı hakkında bilinenler çok azdır. Gerçekten yaşayıp yaşamadığı antik dünyada bile tartışma konusu olmuştur. Diogenes Laertius’tan bir alıntıda Hermarkhos gibi Epikuros’un da Leukippos adlı bir filozofun yaşamadığını düşündüğü söylenir, bununla birlikte ona dair alıntılar daha fazladır. Milet’te yaşadığı, Demokritos’un hocası olduğu kabul edilir.Demokritos (yaklaşık MÖ 460-370): Birçok kaynakta Abderalı olarak anılmıştır. Atomcu Felsefe ve evrenin atom teorisinin gelişiminde merkezi bir yer işgal eder. Temel konularda hocası Leukippos’un izinden giden Demokritos, onun teorisini daha kuşkucu ve daha az tümdengelimci bir yöntemle ele alıp geliştirmiştir. Doğu’da çok seyahat etmiş, Mısır, Persia, Hindistan ve Babil’de birçok şey öğrenmiştir. Demokritos etik konulara da ilgi duymuş ya da kendisinden sonraki yazarlar ona bazı etik fragmanların atfedilmesini garipsememiştir. Atomcu Felsefe Fragmanları, daha sonra Epikurosçu fiziğe ve materyalist felsefeye zemin hazırlayan bu felsefe ekolünün temsilcilerine ve onların kabul veya reddedilişlerine dair tüm erken dönem yazılı kaynakları Türkçeye aktarma amacını taşımaktadır.C. Cengiz Çevik (1983): İstanbul Üniversitesi Edebiyat Fakültesi Latin Dili ve Edebiyatı Anabilim Dalı’nda lisans, yüksek lisans ve doktorasını tamamladı. Hasan Âli Yücel Klasikler Dizisi için Epiktetos, Sextus Empiricus,  Bacon, Horatius, Seneca, Cicero, Copernicus ve Luther’den birçok eser çevirdi. Temel akademik çalışma alanı olan  Antikçağ’da siyaset ve felsefe ilişkisi başta olmak üzere farklı konularda çeviri ve telif eserleri üzerinde çalışmaya  devam ediyor.  "
        }
    ],
    [
        146,
        {
            "isbn": "978-6254051548 ",
            "title": " Cahil Filozof",
            "original-title": "Le Philosophe Ignorant ",
            "original-language": "FR ",
            "originally-published": 1765 - 1766,
            "written-by": [
                { "name": " Voltaire ", "role": "Author " },
                { "name": "Berna Günen ", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": ["Philosophical Essay ", " "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "10th ",
            "summary": " Sen kimsin? Nereden geliyorsun? Ne yapıyorsun? Ne olacaksın? Bu; evrendeki bütün canlılara sorulması gereken, fakat hiçbirinin cevap vermediği bir soru. Bitkilere hangi meziyetin onlara boy attırdığını, aynı toprağın nasıl bu kadar çeşitli ürün verebildiğini soruyorum. Oysa bu duyarsız ve dilsiz canlılar, her ne kadar ilahi bir yetiyle donatılmış da olsalar, beni kendi cehaletimle ve beyhude varsayımlarımla baş başa bırakıyorlar. Hepsi de hareket edebilen ve iletişim kurabilen, benimle aynı duyulara, her türden tutkunun yanı sıra belli ölçüde düşünceye ve hafızaya da sahip bütün o farklı hayvan sürülerine sorular soruyorum. Oysa onlar ne olduklarını, niçin var olduklarını ve ne olacaklarını benim kadar bile bilmiyorlar. "
        }
    ],
    [
        147,
        {
            "isbn": "978-6052958735 ",
            "title": " Sadık veya Kader – Bir Doğu Masalı –",
            "original-title": "  Zadig ou La Destinée –Histoire Orientale-",
            "original-language": "FR ",
            "originally-published": 1747,
            "written-by": [
                { "name": "Voltaire ", "role": "Author " },
                { "name": " Berna Günen ", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": [" Philosophical Novel", " "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "8th ",
            "summary": "Aşağıda imzası bulunan, bir bilim adamı hatta nüktedan bir kişi geçinen ben, kendime rağmen ilginç, eğlenceli, ahlâklı ve felsefi bulduğum, romanlardan nefret edenlerin dahi hoşuna gideceğini düşündüğüm bu metni okudum. Bu yüzden söz konusu metni yerin dibine batırdım ve kazasker hazretlerine bunun berbat bir eser olduğunu beyan ettim.  "
        }
    ],
    [
        148,
        {
            "isbn": "978-6053326182 ",
            "title": "Rahibe ",
            "original-title": "La Religieuse  ",
            "original-language": " FR",
            "originally-published": 1796,
            "written-by": [
                { "name": "Denis Diderot ", "role": "Author " },
                { "name": " Adnan Cemgil ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Novel ", "Philosophical Criticism "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "7th ",
            "summary": " Manastır yaşamının, rahibelik kurumunun genç bir rahibenin gözünden anlatıldığı bu ateşli yergi, toplumsal çevre tasviri ve kişilik çözümlemesindeki başarılarıyla öne çıkar. Diderot’nun iki yüzyılı aşkın bir süre önce sahip olduğu iç görü, gözlem kabiliyeti ve güçlü çözümlemeler de günümüzün psikanaliz çevrelerini kendisine hayran bırakacak bir derinliğe sahiptir. "
        }
    ],
    [
        149,
        {
            "isbn": "978-6053609551 ",
            "title": " Atinalıların Devleti",
            "original-title": " Ἀθηναίων πολιτεία (Athenaion Politeia) ",
            "original-language": " GRC",
            "originally-published": -329 / -325,
            "written-by": [
                { "name": "Aristoteles ", "role": "Author " },
                { "name": " Ari Çokona", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["Philosophy ", "Political Science ", "Ancient Greek Classic "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "14th ",
            "summary": "Atinalıların Devleti, Aristoteles’in genel okur kitlesine hitaben yazılmış, devlet rejimlerini konu alan kapsamlı eseri Politeia’nın ilk ve en ayrıntılı kısmıdır.Aristoteles Atina tarihini anlattıktan sonra kendine has metodik ve bilimsel yaklaşımla Atina devletinin yapısını ve işleyişini anlatır. Atina demokrasisi ve kurumları hakkında bugün bildiklerimizin çoğuna kaynaklık eden Atinalıların Devleti, sadece içeriğiyle değil üslubuyla da çok değerli bir klasiktir.  "
        }
    ],
    [
        150,
        {
            "isbn": "978-9944880411 ",
            "title": " Bilimler ve Sanatlar Üstüne Söylev",
            "original-title": "Discours sur les sciences et les arts ",
            "original-language": " FR",
            "originally-published": 1750,
            "written-by": [
                { "name": "Jean-Jacques Rousseau  ", "role": "Author " },
                { "name": "Sabahattin Eyüboğlu", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": ["Philosophical Essay ", " "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 17th",
            "summary": " Bu söylev, Dijon Akademisi’nin 1749’da ortaya attığı şu yarışma sorusuna cevap olarak yazılmıştır ve birinciliği kazanmıştır:'Bilimlerin ve sanatların gelişmesi ahlakın düzelmesine yardım etmiş midir?'Rousseau bu soruya yalnız ünlü söylevi ile değil, bütün hayatı ve eserleriyle hayır cevabını vermiştir. Söylev’in önemi Rousseau’nun yazarlık hayatında bir hareket noktası oluşu ve eserlerindeki başlıca tezi özetleyişidir. Rousseau ölünceye kadar bu söylevdeki fikirlere bağlı kalmış ve bütün eserleri sanki aynı fikirlerin genişletilmesi ve ispatlanması için yazılmıştır.Rousseau’nun tezi ne kadar garip görünürse görünsün, bugün bile kuvvet ve tazeliğini korumaktadır. Avrupa uygarlığının şimdiki buhran günlerinde birçok düşünürler sanat ve bilimlerin insan hayatındaki yeri ve önemi sorunlarına dönmektedirler. Dijon Akademisi’nin sorusu bugün yeniden sorulsa Rousseau  gibi cevap verecek düşünürtlerin bulunmayacağı ileri sürülmez.Rousseau  bu söylevi niçin, nasıl yazdığını İtiraflar’da şöyle anlatır:… "
        }
    ],
    [
        151,
        {
            "isbn": "978-6257999144 ",
            "title": " Retorik",
            "original-title": "Phtopikh ",
            "original-language": " GRC",
            "originally-published": -400 / -301,
            "written-by": [
                { "name": " Aristoteles", "role": "Author " },
                { "name": " Ari Çokona", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": [" Rhetoric", "Philosophy ", "Ancient Greek Classic ",],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "13th ",
            "summary": " Antik Yunan’da eğitim sosyal ve siyasal hayatta çok önemli olan güzel konuşmayı da kapsadığından, Aristoteles de Lykeion’da retorik üzerine dersler vermiş, notlar ve kitaplar yazmıştır. Bu konuda günümüze ulaşan en önemli eseri Retorik adıyla bilinen çalışmasıdır. Güzel konuşmanın bir sanat olduğunu belirten Aristoteles, bu eserinde retoriğin tanımını verir, türlerini ve öğelerini belirtir, uzun açıklamalar ve örneklerle başarılı bir söylevin nasıl hazırlanacağını anlatır. "
        }
    ],
    [
        152,
        {
            "isbn": "978-6053320340 ",
            "title": "Kaderci Jacques ve Efendisi ",
            "original-title": " Jacques le Fataliste ",
            "original-language": "FR",
            "originally-published": 1785,
            "written-by": [
                { "name": "Denis Diderot", "role": "Author " },
                { "name": "Adnan Cemgil", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": [" ", " "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "5th",
            "summary": " Encyclopédie’nin yayın yönetmenliğini üstlendi, yazdığı edebi ve felsefi eserlerin yanı sıra geçinmek için çeviriler yaptı. Jacques ve efendisi arasında geçen felsefi konuşmalardan oluşan, Diderot’nun yaşadığı dönemde henüz “determinizm” ismini almamış olan “kadercilik” hakkındaki bu eser de Diderot’nun diğer eserleri gibi zamanının ilerisinde kabul edilebilecek felsefi sorgular içerir. Bir “roman” olmadığı bizzat yazarı tarafından dile getirilse de Kaderci Jacques ve Efendisi tür bakımından romana yakın dururken roman sanatının çok önemli iki örneği olan Tristram Shandy ve Don Quixote’yi de selamlamaktadır. "
        }
    ],
    [
        153,
        {
            "isbn": "978-6052958278 ",
            "title": "Goriot Baba ",
            "original-title": "| Père Goriot  ",
            "original-language": "FR",
            "originally-published": 1835,
            "written-by": [
                { "name": "Honoré de Balzac ", "role": "Author " },
                { "name": " Volkan Yalçıntoklu", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["The Human Comedy ", " "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 10th",
            "summary": "830 yılında kurmaca eserlerini Dante’nin İlahi Komedya’sına atıfla İnsanlık Komedyası başlığı altında topladı. Bir kısmı zamanla edebiyatın arketiplerine dönüşen 2000’i aşkın karakter yarattı; tüm bu karakterleri önyargıdan uzak analitik bir yaklaşımla, toplumsal sınıfından yalıtmaksızın ele aldı. İlk kez 1834 yılında Revue de Paris’de tefrika edilen Goriot Baba, İnsanlık Komedyası’nın Töre İncelemesi ayağında Paris Yaşamından Sahneler başlığı altında yer alır. Yoksul düşmüş eski tüccar yaşlı Goriot’nun sefaleti, ıstırapları ve yalnızlığını merkeze alan roman; paranın insanlık durumu üzerindeki nüfuzunu babalık müessesi, insani zaaflar, gösteriş budalalığı üzerinden son derece trajik bir olay örgüsü ile gözler önüne serer. Kendi antitezlerini; yani anlatıcının yer yer öfkeli ve alaycı tavrının cisimleştiği Vautrin’i, Paris sosyetesine gözünü dikmiş, hırslı ancak naif hukuk öğrencisi Rastignac’ı da içinde barındıran bu burjuva cehennemi, Goriot Baba’ya dek hiç bu denli çarpıcı bir üslupla tasvir edilmemiştir.  "
        }
    ],
    [
        154,
        {
            "isbn": "978-6053328582",
            "title": "Vadideki Zambak ",
            "original-title": "Le Lys dans la vallée ",
            "original-language": "FR ",
            "originally-published": 1836,
            "written-by": [
                { "name": "Honoré de Balzac ", "role": "Author " },
                { "name": "Volkan Yalçıntoklu ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["The Human Comedy ", " "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 24th",
            "summary": " 1830 yılında kurmaca eserlerini Dante’nin İlahi Komedya’sına atıfla İnsanlık Komedyası başlığı altında topladı. Bir kısmı zamanla edebiyatın arketiplerine dönüşen 2000’i aşkın karakter yarattı, tüm bu karakterleri önyargıdan uzak analitik bir yaklaşımla, toplumsal sınıfından yalıtmaksızın ele aldı. Romana kazandırdığı toplumsal ve gerçekçi çerçeve ona gerçekçi romanın kurucusu unvanını kazandırdı. İnsanlık Komedyası’nın Töre İncelemesi ayağında Taşra Yaşamından Sahneler başlığı altında yer alan Vadideki Zambak 1836 yılında yayımlandı. Roman, gençlikten yetişkinliğe uzanan yolu, evli bir kadına duyduğu aşkla kateden Felix’in hikâyesini anlatıyor. "
        }
    ],
    [
        155,
        {
            "isbn": " 978-6053326526",
            "title": " Aforizmalar",
            "original-title": "Aphorismoi ",
            "original-language": "GRC ",
            "originally-published": NaN,
            "written-by": [
                { "name": "Hippokrates  ", "role": "Author " },
                { "name": "Eyüp Çoraklı ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Medicine", "Philosophy "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 10th",
            "summary": " Koslu Hippokrates (MÖ 460-370): Tıbbı batıl inançların gölgesinden kurtarıp akli temellere dayalı bir sanata dönüştürmüş, böylece “tıbbın babası” olarak tarihe geçmeyi başarmıştır. Ortaya koyduğu anlayış zaman içinde değişik toplum ve kültürlerce benimsenmiş, hatta Galenos (MS 2. yy.) aracılığıyla Batı ve İslam ortaçağlarına aktarılarak çağdaş bilimin temellerinin atıldığı 18. yüzyıla değin etkisini sürdürmüştür. Kendisine atfedilen Hippokrates Külliyatı adlı derleme, insanın vücut yapısından hastalıkların nedenlerine, hatta uygulamada gözetilecek teknik kurallar ile ahlaki düsturlara kadar pek çok konuya değinen yaklaşık altmış metinden oluşmakta ve tıp konusunda antikçağdan günümüze ulaşan derli toplu en temel kaynak olma niteliğini taşımaktadır. Bu derlemenin gözbebeği sayılan, yüzyıllar boyu hekimlerin ellerinden düşürmediği Aforizmalar ise tıp tarihinde çığır açan Hippokrates’in tıp anlayışına aralanan bir kapıdır. "
        }
    ],
    [
        156,
        {
            "isbn": "978-6253840204 ",
            "title": " Candide ya da İyimserlik",
            "original-title": "Candide, ou l'Optimisme ",
            "original-language": "FR ",
            "originally-published": 1759,
            "written-by": [
                { "name": " Voltaire", "role": "Author " },
                { "name": "Devrim Çetinkasap ", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": ["Philosophical story ", " Satire", " Picaresque novel",],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 1th",
            "summary": " Fransız İhtilali’nin arifesinde Avrupa medeniyetinin gelişim yönünü etkileyen eserleri çağımızda da baskı ve bağnazlık karşısında yurttaşlık hakları ve özgürlük düşüncesinin başyapıtları arasında yer alır. 1759’da yayımlanan en ünlü eseri Candide, dine ve din kurumlarına hakaret ve politik kışkırtıcılıkla itham edilerek birçok yerde yasaklanmıştır. Yasaklara rağmen birçok dile çevrilmiş, çok kısa sürede son derece popüler olmuştur. Aslen kötülüğü konu edinen teolojik bir metin olan Candide, Leibniz’in “mümkün dünyaların en iyisinde” yaşadığımızı savunan iyimser felsefesine Voltaire’in cevabıdır. Voltaire, Candide’i “en iyi” dünyadaki kötülüğün türlü çeşidinden geçirir ve nihayet İstanbul’a gönderir, Candide burada mutluluğun formülünü bulacaktır. "
        }
    ],
    [
        157,
        {
            "isbn": " 978-6254053191",
            "title": " Konuşmalar",
            "original-title": " Lun Yu (論語)",
            "original-language": "CH ",
            "originally-published": -400 / -301,
            "written-by": [
                { "name": " Konfüçyüs ", "role": "Author " },
                { "name": " Yang Bojun", "role": "Compiler" },
                { "name": "Giray Fidan ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["Philosophy ", "Moral doctrine "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 6th",
            "summary": "Tarihteki en önemli, en ünlü Çinli filozof. Yaşadığı dönem Çin için hem siyasi açıdan tam bir kargaşa çağı, hem de Çin tarihinin en parlak düşünsel dönemlerinden biriydi. “Yüz Okul” adı verilen felsefe akımlarının düşünürlerinden olan Konfüçyüs beylikler arasında seyahat ediyor, yöneticilere fikirlerini aşılamaya çalışıyordu. Konfüçyüs sorunların barışçıl yöntemlerle çözülmesinden yanaydı. Ona göre iyi, ahlâklı ve yetenekli kişilerin yönetime gelmesi, toplumun düzelmesinin ilk adımıydı. Platon’dan yaklaşık yüz yıl önce kendi okulunu kuran Konfüçyüs şiir, müzik, tarihi belge ve kroniklerden oluşan antik metinleri derleyerek derslerinde kullanmış, bu eserler daha sonra Çin medeniyetinin temel kaynakları olarak kabul edilmiştir. Çin tarih, kültür ve medeniyetini anlamak için Konfüçyüs’ü anlamak çok önemlidir. Çin düşüncesinin en temel metinlerinden biri olarak kabul edilen Konuşmalar eseriyle Hasan Âli Yücel Klasikler Dizisi de yayım hayatının 15. yılında 400 esere ulaşmış oluyor.  "
        }
    ],
    [
        158,
        {
            "isbn": " 978-6052956267",
            "title": "Dorian Gray’in Portresi ",
            "original-title": "The Picture of Dorian Gray ",
            "original-language": " EN",
            "originally-published": 1891,
            "written-by": [
                { "name": "Oscar Wilde  ", "role": "Author " },
                { "name": "Didar Zeynep Batumlu", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": ["English Literature", "Philosophical novel ", "Gothic novel  "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 21th",
            "summary": "Dorian Gray’in Portresi, Wilde’ın zamanında büyük tartışmalar yaratan, pek az övgüye karşılık son derece sert eleştirilere maruz kalan, hatta yargılanırken aleyhinde delil olarak gösterilen tek romanıdır. Yazarın “sanat, sanat içindir” manifestosu olarak okunabilecek önsözünde de belirttiği gibi, kötülük ve erdemin sanatsal bir malzeme olarak kullanıldığı edebi eserlerin şahikasıdır.  Ebedi gençlik ve güzellik dileği kabul olan ve insanı insan yapan değerlerden giderek uzaklaşıp yozlaşan Dorian Gray, Wilde’ın dünya edebiyatında eşine nadir rastlanan anlatımıyla ölümsüzlüğe kavuşur. Dorian Gray’in Portresi defalarca sinemaya uyarlanmış, pek çok sanat dalına da ilham vermiştir.  "
        }
    ],
    [
        159,
        {
            "isbn": " 978-6052954027",
            "title": " Kendime Düşünceler",
            "original-title": "Τὰ εἰς ἑαυτόν (Ta eis heauton) — Batı'da Meditations olarak bilinir ",
            "original-language": "GRC ",
            "originally-published": 121 / 180,
            "written-by": [
                { "name": " Marcus Aurelius", "role": "Author " },
                { "name": "Yunus Emre Ceren ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" Philosophy ", "Stoic philosophy", " Diary "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 20th",
            "summary": "  Stoacı İmparator”, “Filozof İmparator” gibi sıfatlarla anılan Marcus Aurelius, barışçı bir insan olmasına rağmen hükümdarlığının çoğunu seferlerde geçirdi. MS 169 yılı sonlarında Germen kavimlerine karşı düzenlenen bir sefer esnasında yazmaya başladığı Kendime Düşünceler, Stoacılık, özellikle de Roma Stoası açısından büyük bir öneme sahiptir. Sağlam bir eşitlik ve özgürlük inancına sahip olan Marcus Aurelius, imparatorluğu boyunca doğayı bilip anlayarak yaşamaya çalışmış, her şeyin ortasına insanı koymuştur. Günlük olarak kaleme alınmış bir özdeyişler ve düşünceler derlemesi denebilecek Kendime Düşünceler eserinde kendinden önceki caesarları ve filozofları eleştirmekle kalmayıp, kendi kendini de sorguya çekerek bir vicdan muhasebesi de yapar. Sonraki kuşaklara, kilise düşünürlerine, Rönesans’a da temel olan Kendime Düşünceler, Stoa felsefesinin anlaşılması açısından günümüzde de çok değerli bir kaynaktır."
        }
    ],
    [
        160,
        {
            "isbn": "978-6257070331 ",
            "title": "Safdil ",
            "original-title": " L’ingénu",
            "original-language": "FR ",
            "originally-published": 1767,
            "written-by": [
                { "name": "Voltaire  ", "role": "Author " },
                { "name": "Berna Günen ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Philosophical story", "Satire",],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "4th ",
            "summary": " Fransız İhtilali’nin arifesinde Avrupa medeniyetinin gelişim yönünü etkileyen eserleri çağımızda da baskı ve bağnazlık karşısında yurttaşlık hakları ve özgürlük düşüncesinin başyapıtları arasında yer alır. Safdil adlı romanını Cizvit tarikatının Fransa’da yasa dışı ilan edilmesinden üç sene sonra 1767’de yayımlayan Voltaire; eserin hikâyesini Jansenizmin önde gelen ismi ilahiyatçı Pasquier Quesnel’in el yazmalarına atfetmiştir. Yazar Cizvitleri rahatça eleştirmek için Jansenist bir rahibi kurgusunda kaynak olarak göstermiş; bu durum hafif davranışlı kadınlar, din adamları ve saf bir Huron Kızılderilisinin yer aldığı hikâyeyi katı ahlakçı bir Jansenist’in notlarına bağlayarak daha da gülünç hâle getirmiştir. "
        }
    ],
    [
        161,
        {
            "isbn": "978-6053609780 ",
            "title": "Felsefe Konuşmaları ",
            "original-title": " Entretiens",
            "original-language": " FR",
            "originally-published": 1830 - 1920,
            "written-by": [
                { "name": "Denis Diderot  ", "role": "Author " },
                { "name": "Adnan Cemgil", "role": "Translator" },
                { "name": "Volkan Yalçıntoklu", "role": "Compiler" },
            ],
            "print-year": 2025,
            "genre": ["Philosophy", "Philosophical dialogue",],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 8th",
            "summary": " Bu kitapta yer alan konuşmalardan “D’Alembert” 1830, “La Maréchale” 1776 ve sonradan bulunan “Başrahip Barthélemy” 1920 yılında yayımlandı. “D’Alembert” konuşmaları evrim, evrenin düzeni, yaşam ve ölüm konularını; “Başrahip Barthélemy” konuşması dua, tanrı, ruh, öteki dünya konularını; “La Maréchale” konuşması ise din ve ahlâk arasındaki denklemin sorgusunu içerir. Konuşmalar, ele aldıkları konular itibarıyla diyalektik materyalizme, evrim teorisine ve ahlâka dair zamanından önce ileri sürülmüş düşünceler olarak kabul edilebilirler. Diderot düşünceleri kadar, bu düşünceleri konuşma biçiminde sunuşuyla da ilgi çekmiştir.  "
        }
    ],
    [
        162,
        {
            "isbn": "978-6253841232 ",
            "title": "Ciddi Olmanın Önemi ",
            "original-title": "The Importance of Being Earnest ",
            "original-language": "EN ",
            "originally-published": 1899,
            "written-by": [
                { "name": "Oscar Wilde ", "role": "Author " },
                { "name": "Hamit Çalışkan ", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": ["English Literature ", "Farcical comedy "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 1th",
            "summary": " Ciddi Olmanın Önemi Wilde’ın “piyasa” için yazdığı dört komedyadan biridir. Wilde’ın kaleminden çıkan her şey gibi göz alıcı bir zekâ, sivri dil, hazırcevaplıkla dolup taşar. Form olarak bir sosyete komedyası olsa da bu türün kemikleşmiş karakterleri Wilde’ın elinde yenilenir, çehre değiştirir. Aldatmacalar nezakete karışırken “gerçek”le kurgu da iç içe geçer. Salt eğlencelik olanı estetik kılma gücü, Wilde’ın alametifarikası, bu oyuna da damgasını vurmuştur. Wilde’ın hapse girmeden önce yazdığı son oyundur. "
        }
    ],
    [
        163,
        {
            "isbn": "978-6254056604 ",
            "title": " İkna Sanatı (Hayaletler Vadisinin Bilgesi)",
            "original-title": "鬼谷子 (Guǐgǔzǐ) ",
            "original-language": "CH ",
            "originally-published": -400 / -301,
            "written-by": [
                { "name": "Guiguzi  ", "role": "Author " },
                { "name": " Giray Fidan", "role": "Translator/Compiler" },
            ],
            "print-year": 2025,
            "genre": ["Philosophy ", "Rhetoric ", " Strategy"],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 9th",
            "summary": " İsmini inzivaya çekildiği “Hayaletler Vadisi”nden aldığı söylenen Guiguzi. “İttifaklar Okulu” veya “Diplomasi Okulu” adlarıyla bilinen felsefe akımının kurucusu olarak kabul edilmektedir. Bu akımın ilk yazılı eseri olan İkna Sanatı da Çin tarihinin ilk retorik eseridir. Aristoteles’in Retorik eserinin Doğu Asya’daki muadili sayılabilecek eser aynı zamanda strateji, insan ilişkileri, psikoloji, ikna etme, müzakere ve diplomasi alanında da Çin’in en eski ve önemli eserlerinden biri sayılmaktadır. Antik dönem Çin yöneticileri, sıradan insanlara ve astlarına yönetenleri anlama konusunda yol gösterdiğini düşündükleri için İkna Sanatı’nı tehlikeli bir kitap saymışlardır.Bu “tehlikeli” içeriği ve yazarının Konfüçyanizm’in temel değerleriyle çelişen öğretileri yüzünden uzun süre resmî koleksiyonlara dâhil edilmeyen İkna Sanatı, özgün dili Çinceden yapılan çevirisiyle Türkçede ilk kez yayımlanıyor.  "
        }
    ],
    [
        164,
        {
            "isbn": "978-6053326649 ",
            "title": "Poetika – Şiir Sanatı Üstüne ",
            "original-title": "Περὶ ποιητικῆς (Peri Poietikês) ",
            "original-language": " GRC",
            "originally-published": -335,
            "written-by": [
                { "name": "Aristoteles  ", "role": "Author " },
                { "name": " Ari Çokona, Ömer Aygün ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["Literary theory ", "Philosophy ", "  Aesthetics"],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "14th ",
            "summary": "Edebiyat eleştirisi, edebiyat kuramı ve dramanın kurucu metinlerden biri olarak kabul edilen, Poetika –Şiir Sanatı Üstüne; Aristoteles’in Platon’un taklitçi sanata dair eleştirilerine verdiği bir yanıttır. Günümüze yalnızca tragedya ile ilgili kısmı ulaşmıştır. Aristoteles, bu kısa ama öz metinde tragedyaya dair temel kavram ve ilkeleri tartışmaktadır.  "
        }
    ],
    [
        165,
        {
            "isbn": " 978-6052953099",
            "title": " Doksan Beş Tez ",
            "original-title": "XCV Theses ",
            "original-language": " LA",
            "originally-published": 1517,
            "written-by": [
                { "name": " Martin Luther", "role": "Author " },
                { "name": " C. Cengiz Çevik ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Theology", "Discussion text"],
            "language": " LA-TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 8th",
            "summary": "2017’de 500. yaşını dolduran Reform’un ilk manifestosu Doksan Beş Tez ve Luther’in Albrecht von Brandenburg’a yazdığı mektuptur.  "
        }
    ],
    [
        166,
        {
            "isbn": "978-6257999182 ",
            "title": "Fragmanlar ",
            "original-title": " Περὶ φύσεως (Peri Physeos)",
            "original-language": " GRC",
            "originally-published": NaN,
            "written-by": [
                { "name": " Herakleitos", "role": "Author " },
                { "name": " C. Cengiz Çevik ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Philosophy", " Aphorism"],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 6th",
            "summary": "Herakleitos (MÖ yaklaşık 540-480): Sadece Antik Yunanda değil, tüm felsefe tarihinde en önemli ve en etkili filozoflardan biridir. Öğretisinin farklı unsurları kadar tarihsel yönü tartışmalı olan teatral kişiliği de onu çağlar boyunca anılan ünlü bir figüre dönüştürmüştür. Yaşamıyla ilgili bilinenler diğer Sokrates öncesi filozoflar gibi kendinden sonraki yazarların yazdıklarına dayanmaktadır. Kapalı bir dil kullandığı için “karanlık” olarak anılan Herakleitos kendisini insanların da parçası olduğu kosmosun oluşumu ve yapısıyla ilgili en önemli hakikate ermiş olarak görür. Kosmosunda geçerli olan üç temel önerme vardır: Karşıtlar birbiriyle uyumludur, her şey sürekli devinim ve değişim halindedir, kosmos her daim canlı kalan ateştir. Hem fiziksel hem de ruhsal değişim süreçlerini tek bir dönüşüm öğretisiyle açıklayan filozof, insan yasalarını tanrısal logosla ilişkili görmüş ve politik aklı tanrısal logosla birleştirerek felsefede etikle fiziği ilk defa birbirine örmüştür.  "
        }
    ],
    [
        167,
        {
            "isbn": "978-6052959060 ",
            "title": " Deniz İşçileri",
            "original-title": " Les Travailleurs de la mer",
            "original-language": "FR ",
            "originally-published": 1866,
            "written-by": [
                { "name": " Victor Hugo", "role": "Author " },
                { "name": " Volkan Yalçıntoklu ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": [" Literature", "French Literature ", "Novel ", "Romance "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "6th ",
            "summary": " Yazar, ilk kez 1866’da yayımlanan Deniz İşçileri romanını, sürgün gittiği ve sürgün kararı iptal edildikten sonra da ayrılmayıp 15 yılını geçirdiği Guernsey Adası’na ve orada yaşayan deniz işçilerine ithaf etmiştir. Yazar bu eserle, başta sevdiği kadına kavuşabilmek için karaya oturmuş bir gemiyi tek başına kurtarmak zorunda kalan Guernseyli bir deniz işçisi olmak üzere, tüm yoksul deniz işçilerinin hayat mücadelesini hayranlık verici ve ayrıntılı tasvirlerle edebiyata taşımış, onların mücadelelerini denizciliğin ve denizin kâdim diliyle onurlandırmıştır.   "
        }
    ],
    [
        168,
        {
            "isbn": "978-6053603535 ",
            "title": " Böyle Söyledi Zerdüşt",
            "original-title": " Also Sprach Zarathustra -Ein Buch fur Alle und Keinen-",
            "original-language": "DE ",
            "originally-published": 1883 / 1885,
            "written-by": [
                { "name": "Friedrich Nietzsche ", "role": "Author " },
                { "name": " Mustafa Tüzel", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": ["Philosophy", " Literature", "Religious criticism "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "32th ",
            "summary": "Otuz yaşında dağa çekilen bilge Zerdüşt, on yıl yalnız yaşadıktan sonra insanlara öğretmek için aşağıya iner. Ancak insanların hazır olmadığını görür ve gerçek dinleyiciler arar.  "
        }
    ],
    [
        169,
        {
            "isbn": " 978-6053608288",
            "title": "Kumarbaz ",
            "original-title": " Игрок (İgrok)",
            "original-language": "RU ",
            "originally-published": 1866,
            "written-by": [
                { "name": "Fyodor Mihayloviç Dostoyevski ", "role": "Author " },
                { "name": "Koray Karasulu", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": ["Literature", " Russian literature", "Psychological novel "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "31th ",
            "summary": "Dünyanın çeşitli ülkelerinden gelen kumarbazların toplandığı kurmaca bir Alman kasabası Rulettenburg'da geçen roman; bir Rus gencinin Avrupa'da para ve aşk mücadelesini anlatır.Dostoyevski yayıneviyle yaptığı anlaşma gereği romanı sadece 25 günde yazdı. Bir ay içinde teslim etmezse tüm eserlerinin haklarını kaybedecek olan yazar, kısa sürede iyi bir roman ortaya çıkarabilmek için bir stenograftan yardım aldı.  "
        }
    ],
    [
        170,
        {
            "isbn": " 978-6053604549",
            "title": " Venedik Taciri",
            "original-title": " The Merchant of Venice",
            "original-language": "EN ",
            "originally-published": 1600,
            "written-by": [
                { "name": "William Shakespeare ", "role": "Author " },
                { "name": "Özdemir Nutku", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": ["Literature ", "English Literature ", " Shakespeare comedy", "Dram "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 22th",
            "summary": "Oyunları ve şiirlerinde insanlık durumlarını dile getiriş gücüyle 400 yıldır bütün dünya okur ve seyircilerini etkilemeyi sürdüren efsanevi yazar, en ünlü ve en güçlü eserlerinden biri olan Venedik Taciri’nde hemen her karakterle seyirciyi büyülemektedir. Shylock başta olmak üzere her karakterde onca zıtlığı bir arada barındırabilen insan doğası çok büyük bir maharetle sergilenmektedir. Seyirci pek sevdiği bir karakterden, hemen bir sahne sonra nefret ettiğini ve bir tiradıyla tekrar sempati duymaya başladığını hissedebilir. Bu yüzden Venedik Taciri, Shakespeare büyüsünün doruk noktalarından biri olmaya devam etmektedir.  "
        }
    ],
    [
        171,
        {
            "isbn": " 978-6053607021",
            "title": " Sokrates’in Savunması",
            "original-title": "Ἀπολογία Σωκράτους ",
            "original-language": " GRC",
            "originally-published": -399,
            "written-by": [
                { "name": " Platon", "role": "Author " },
                { "name": "Ari Çokona ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": ["Socratic dialogue ", "Defense speech"],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 32th",
            "summary": "Bu kitapta birbirini tamamlayan dört diyalog yer almaktadır. İlk diyalog olan Euthyphron’da yargılanışının öncesi anlatılır ve dinsizlikle suçlanan Sokrates’in inançları hakkında bilgi verilir. Sokrates’in Savunması’nda ise yargı süreci anlatılmaktadır. Kriton’da hüküm sonrası anlatılır, bir yurttaşın saygı duyması gereken ilkeler tartışılır. Platon’un en şiirsel eserlerinden biri olan Phaidon’daysa Sokrates’in son günü anlatılırken ruh hakkındaki düşünceleri yansıtılmaktadır.  "
        }
    ],
    [
        172,
        {
            "isbn": "978-9944888035 ",
            "title": " Bir Delinin Anı Defteri Palto-Burun -Petersburg Öyküleri ve Fayton-",
            "original-title": " ",
            "original-language": "RU ",
            "originally-published": 1835 - 1842,
            "written-by": [
                { "name": "Nikolay Vasilyeviç Gogol  ", "role": "Author " },
                { "name": "Mazlum Beyhan ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" Literature", "Russian Literature ", "Psychological story ", "Black humor "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 32th",
            "summary": "  "
        }
    ],
    [
        173,
        {
            "isbn": "978-9944885454 ",
            "title": "Babalar ve Oğullar ",
            "original-title": "Отцы и дети (Ottsı i Deti) ",
            "original-language": "RU ",
            "originally-published": 1862,
            "written-by": [
                { "name": " İvan Sergeyeviç Turgenyev ", "role": "Author " },
                { "name": " Ergin Altay ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": [" Literature", "Russian Literature ", " Novel ", "Critical realism "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 27th",
            "summary": "Toprak beyliğini ve Rus toplumunun tüm geleneksel değerlerini söküp atmak isteyen ve kendini nihilist olarak tanımlayan genç Bazarov, Arkadiy'nin Batıcı babasını ve amcasını dehşete düşürür. Roman eski nesil liberaller ile nihilist gençlik arasındaki kuşak çatışmasını işler.  "
        }
    ],
    [
        174,
        {
            "isbn": " 978-6053609940",
            "title": " Üç Ölüm",
            "original-title": "Три смерти ",
            "original-language": "RU ",
            "originally-published": 1858,
            "written-by": [
                { "name": "Lev Nikolayeviç Tolstoy  ", "role": "Author " },
                { "name": " Günay Çetao Kızılırmak ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Literature", "Russian Literature ", "Short story ", "Philosophical realism "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 17th",
            "summary": " Üç farklı varlığın ölümü karşılaştırmalı olarak anlatılır: ölüme direnen soylu bir kadın, bunu kabullenen yoksul bir köylü ve sessizce devrilip toprağa karışan bir ağaç. Tolstoy doğal ve zorlanmayan ölümün en onurlu ölüm olduğunu öne sürer. "
        }
    ],
    [
        175,
        {
            "isbn": "978-6254292750 ",
            "title": "İtiraf ",
            "original-title": " Исповедь ",
            "original-language": "RU ",
            "originally-published": 1882,
            "written-by": [
                { "name": "Lev Nikolayeviç Tolstoy ", "role": "Author " },
                { "name": "Ayşe Hacıhasanoğlu ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Literature", "Russian Literature ", "Autobiographical essay", "Philosophical confession "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "5th ",
            "summary": "Tolstoy’un 1882 yılında tamamladığı İtiraf, dinî sansür nedeniyle ilk kez 1884’te Cenevre’de basıldı. Rusya’daysa tam metin olarak ancak 1906 yılında yayımlanabildi. Hayatının hiçbir evresinde kendini sorgulamaktan, günahlarını itiraf etmekten geri durmayan Tolstoy, İtiraf’ı için bir mektubunda şunları yazar: “Yeni yapıtımın asıl hedefi, yaşamıma karşı okurda tiksinti uyandırmak.” İtiraf, 1870’lerde dünya görüşünde bir kırılma yaşayan Tolstoy’un, kendi deyimiyle “ikinci doğumu”ndan sonra yazdığı ilk eserdir.  "
        }
    ],
    [
        176,
        {
            "isbn": "978-6053609902 ",
            "title": "Bir İdam Mahkûmunun Son Günü ",
            "original-title": "Le Dernier Jour d'un Condamné ",
            "original-language": "FR ",
            "originally-published": 1829,
            "written-by": [
                { "name": "Victor Hugo  ", "role": "Author " },
                { "name": "Volkan Yalçıntoklu ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" Literature", " French Literature", " Novella ", "Romance "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 37th",
            "summary": "Bu kitabın yazarın isminin yer almadığı ilk baskılarında aşağıdaki satırlar mevcut değildi: Bu kitabın kaleme alınış nedeni iki türlü anlaşılabilir. Söz konusu olan ya bir bahtsızın son düşüncelerini karaladığı irili ufaklı bir tomar sarı kâğıdın bulunup kaydedilmesi ya da bu talihsize rastlayan bir adamın, bir filozofun, bir şairin zihninde takıntı halini alan, bütün benliğine hâkim olan, daha doğrusu bütün benliğine hâkim olmasına izin verdiği idam düşüncesinden onu ancak kitaba dönüştürerek kurtulmasıdır.  "
        }
    ],
    [
        177,
        {
            "isbn": "978-9944889209 ",
            "title": " Öteki",
            "original-title": " Двойник (Dvoynik)",
            "original-language": "RU ",
            "originally-published": 1846,
            "written-by": [
                { "name": "Fyodor Mihayloviç Dostoyevski  ", "role": "Author " },
                { "name": "Tansu Akgün ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" Literature", "Russian Literature ", " Novella", " Psychological fiction"],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 25th",
            "summary": " Dostoyevski, 1846 yılında yayımlanan Öteki adlı eserinde kişilik bölünmesini, parçalanmış bilincin kurduğu ürkütücü ve tehlikeli dünyayı konu edinmiştir. "
        }
    ],
    [
        178,
        {
            "isbn": "978-9944884013 ",
            "title": " Yeraltından Notlar",
            "original-title": "Записки из подполья (Zapiski iz podpolya) ",
            "original-language": "RU ",
            "originally-published": 1864,
            "written-by": [
                { "name": "Fyodor Mihayloviç Dostoyevski ", "role": "Author " },
                { "name": "Nihal Yalaza Taluy ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" Literature", "Russian Literature ", " Philosophical monologue ", "Existential fiction "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " XLIIIth",
            "summary": " Yeraltından Notlar gerçek dünyadan kendini soyutlamış bir kişinin iç çatışmalarını ve hezeyanlarını konu alır. Bu roman Dostoyevski’nin daha sonra yazacağı büyük romanların ipuçlarını taşımaktadır. "
        }
    ],
    [
        179,
        {
            "isbn": "978-6053322696 ",
            "title": " Savaş Sanatı",
            "original-title": "孫子兵法 (Sūnzǐ Bīngfǎ) ",
            "original-language": "CH ",
            "originally-published": NaN,
            "written-by": [
                { "name": "Sun Zi (Sun Tzu)  ", "role": "Author " },
                { "name": "Giray Fidan, Pulat Otkan ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Military strategy", " Philosophy "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "26th ",
            "summary": "Komutan ve düşünür olarak ünlenen Sun Zi’nin Savaş Sanatı eseri insanlık tarihinin en eski ve en fazla araştırılan ve tartışılan strateji eseridir. Bütün dünyada sadece askerlik alanında değil, iş idaresi ve kişisel gelişim gibi pek çok alanda da bir strateji klasiği olarak kabul görmüştür.  "
        }
    ],
    [
        180,
        {
            "isbn": "978-6254054396 ",
            "title": " Tipi ",
            "original-title": "Метель ",
            "original-language": "RU ",
            "originally-published": 1856,
            "written-by": [
                { "name": "Lev Nikolayeviç Tolstoy  ", "role": "Author " },
                { "name": "Enes Taştan", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" Literature", "Russian Literature ", " Novella", "Fiction "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "4th ",
            "summary": " Tipi -Seçme Öyküler ve Masallar- Tolstoy’un yaşam ve eserlerinin farklı dönemlerdeki yansımalarından kronolojik bir seçki niteliği taşımaktadır. Yazarın en ünlü; en beğenilen öykülerinden olan Tipi; Tolstoy eserlerine özgü doğa ve insan tasvirlerindeki ayrıntı ve gerçekliğin belki de doruk noktasıdır. "
        }
    ],
    [
        181,
        {
            "isbn": " 978-6053603511",
            "title": "Genç Werther’in Acıları ",
            "original-title": "Die Leiden des Jungen Werther ",
            "original-language": "DE ",
            "originally-published": 1774,
            "written-by": [
                { "name": "Johann Wolfgang von Goethe  ", "role": "Author " },
                { "name": "Mahmure Kahraman ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" Literature", "German Literature ", "Epistolary novel ", "Sturm und Drang "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "34th ",
            "summary": " Genç Werther’in Acıları daha önce şiirleri ve oyunları yayımlanan Goethe’nin ilk romanıdır. Eser büyük bir ilgiyle karşılanmış ve 25 yaşındaki yazara kısa sürede bütün Avrupa’da ün kazandırmıştır. "
        }
    ],
    [
        182,
        {
            "isbn": "978-6052953167 ",
            "title": "Mutluluğun Kazanılması ",
            "original-title": " (تحصيل السعادة / Kitāb Taḥṣīl al-Saʿāda) ",
            "original-language": "AR",
            "originally-published": 900 - 950,
            "written-by": [
                { "name": "Farabî ", "role": "Author " },
                { "name": " Ahmet Arslan ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" Political philosophy", "Ethics "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "15th ",
            "summary": " Siyaset felsefesi alanındaki en olgun eseri kabul edilen Mutluluğun Kazanılması öncelikle insanların her iki dünyada mutluluğu kazanmalarına aracı olan insani şeyleri, yani teorik erdem, fikrî erdem, ahlâki erdem ve pratik sanatları tanımlar. Sonra da bu erdem ve sanatların türlerini, niteliklerini inceler ve bu dört erdemin bireysel insandan topluma taşınması ve toplumda hayata geçirilmesini ele alır. Farabî bunu yaparken de yönetici, eğitim, öğretim, toplumsal sınıflar, filozof, felsefe-din ilişkisi, kanun koyucu kavramları üzerinden kendi siyaset öğretisini kurar.  "
        }
    ],
    [
        183,
        {
            "isbn": "978-6053321170 ",
            "title": "İvan İlyiç’in Ölümü ",
            "original-title": "Смерть Ивана Ильича ",
            "original-language": " RU",
            "originally-published": 1886,
            "written-by": [
                { "name": " Lev Nikolayeviç Tolstoy ", "role": "Author " },
                { "name": " Mazlum Beyhan ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Literature", "Russian Literature ", " Novella",],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "25th ",
            "summary": " 1886 yılında yayınlanan İvan İlyiç’in Ölümü sade, süssüz anlatımıyla Rus gerçekçi edebiyatında eşsiz bir yere sahiptir. Daima gerektiği gibi yaşamaya özen göstermiş bir insanın ölümle yüzleşmesini konu edinen eser, Tolstoy’un yaşamının son döneminde ortaya koyduğu yeni ahlak anlayışının da ilk örneklerinden biridir. İvan İlyiç’in Ölümü Tolstoy’un bir mektubunda belirttiği gibi sıradan bir adamın, sıradan ölümünün kendi gözünden tasviridir. "
        }
    ],
    [
        184,
        {
            "isbn": "978-6254291036 ",
            "title": "Nasıl Ölünür ",
            "original-title": "Comment on meurt ",
            "original-language": "FR ",
            "originally-published": 1883,
            "written-by": [
                { "name": "Émile Zola ", "role": "Author " },
                { "name": "Volkan Yalçıntoklu ", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": [" Journalistic article", " Social criticism"],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "6th ",
            "summary": " Nasıl Ölünür 1876’da Le Messager de l’Europe dergisinde yayımlandı. Zola’nın titiz üslubu ve gözlem dehasının berrak bir su gibi parladığı bu kısa eserin başrolünde toplumsal bir olay olarak ölüm vardır: Ölüm herkesin başına gelir ama her insan ölümü farklı bir şekilde yaşar, herkes kendi çevresinin içinde ölür.  "
        }
    ],
    [
        185,
        {
            "isbn": "978-9754588422 ",
            "title": "Cimri ",
            "original-title": "L'Avare ",
            "original-language": " FR",
            "originally-published": 1669,
            "written-by": [
                { "name": "Molière ", "role": "Author " },
                { "name": "Sabahattin Eyüboğlu ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": ["The Human Comedy  ", "French Literature "],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": " 37th",
            "summary": " Paris'in zengin ve cimri burjuvalarından Harpagon, kızı Elise ve oğlu Cléante'yi varlıklı kişilere vermeye niyetlidir. Halbuki Elise, babasının yardımcısı olan Valère'yi, Cléante ise maddi sıkıntılar çekmekte olan Mariane'yı sevmektedir. Çocuklarının niyetlerini bilmeyen Harpagon, onlar hakkında kurduğu planı anlatır. Ayrıca Mariane'yi kendisine ayarlaması için çöpçatan Frosine'i devreye sokar. Cléante, babasının niyetini öğrenince acele para bulmaya çalışır ve tefeciden para bulmaya çalışır. Harpagon ise sürekli çalınır korkusu ile yaşadığı altınlarını bir sandığın içinde bahçeye gömmüştür.Harpagon planını uygulayabilmek için Mariane'yi yemeğe davet eder. Davete çöpçatan Frosine'i ve kızı Elise'yi evlendirmeyi düşündüğü Anselme'yi de çağırır. Cléante ve Mariane ise Frosine'den yardım isterler. Frosine'e göre Harpagon'un Mariane'den vazgeçmesi için ona varlıklı ve soylu bir kadın bulmak gerekir. Ancak bu arada Harpagon, oğlunu Mariane'ye duygularını ilan ederken duyar. Evde patırtı koptuğu sırada Harpagon, sandığın yerinde olmadığını fark eder, eve polis şefini çağırır ve herkesten kuşkulandığını belirtir. Sandığı Cléante'nin uşağı La Flèche bulmuş ve efendisine vermiştir. Her şeyi kaybettiğini düşünen Valère, yaşam öyküsünü anlatır. Napolili soylu bir aileden gelmesine rağmen, bir deniz kazasında ailesini kaybetmiştir. Öykü bitince Valère'nin Anselme'nin oğlu, Mariane'nin de erkek kardeşi olduğu anlaşılır. Sonunda Harpagon, Anselme'nin düğün giderlerini karşılaması koşuluyla çocuklarının sevdikleri ile evlenmelerine karar verir.  "
        }
    ],
    [
        186,
        {
            "isbn": "978-9944888004 ",
            "title": "Romeo ve Juliet ",
            "original-title": "Romeo and Juliet ",
            "original-language": " EN",
            "originally-published": 1597,
            "written-by": [
                { "name": "William Shakespeare", "role": "Author " },
                { "name": "Özdemir Nutku", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["Tragedy", " "],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "37th ",
            "summary": " Dört yüz yıldan bu yana parlaklığından bir şey yitirmeden günümüze gelen Shakespeare’in romantik tragedyası Romeo ve Juliet aslında doğuda batıda, kuzeyde güneyde, birçok ülkenin halk öyküleri içinde yer alan, bilinen bir aşk temasını ele alır. Birbirine düşman iki ailenin gençlerinin birbirlerini sevmesi aslında çok işlenmiş bir temadır. Bu temanın ortaya çıkaracağı konu da nerede olursa olsun aşağı yukarı aynı olacaktır. Ancak bir yapıtın ölmezliği işin öyküsünde değil, o öykünün yazarı tarafından ele alınışında var olur. Hele sahne yapıtında dil, üslup, biçim kadar o öykünün dramatik değeri de önemlidir. Shakespeare kâğıt üzerinde olduğu kadar sahne üzerinde de evrensellik boyutlarını getiren içerik kadar dramatik aksiyonu en etkin biçimde ortaya çıkarmıştır. Bu oyunda yalnızca iki gencin umutsuz aşkları değil, her yaştaki insanın birbirine davranışlarındaki kişiyi derinden sarsan ilişkileri de önemlidir. Bu oyun yalnızca Romeo ve Juliet’le değil, büyüğünden küçüğüne bütün karakterlerin sahne üzerinde iyi işlenmesiyle anlam kazanır. Sahnede bir iki dakika görünen çalgıcıların teki bile bu insan ilişkileri açısından en büyüğü kadar önemlidir."
        }
    ],
    [
        187,
        {
            "isbn": "978-6053324447 ",
            "title": "Seyir Defterleri ",
            "original-title": " Diario de a Bordo ",
            "original-language": " ES ",
            "originally-published": 1492 - 1493,
            "written-by": [
                { "name": "Kristof Kolomb", "role": "Author " },
                { "name": "Sait Maden", "role": "Translator" },
                { "name": "Pınar Dua Deveci", "role": "Translator/Compiler" },
            ],
            "print-year": 2024,
            "genre": ["Travel ", " History"],
            "language": "TR ",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "10th ",
            "summary": "Marco Polo’nun anlattığı zenginliklere ulaşabilmek için Pierre d’Ailly, Toscanelli, Ptolemaios gibi birçok kişinin çalışmalarından da yararlanan ünlü kâşif, batıya doğru gitmek suretiyle doğuya ulaşmayı hedefledi. Sunduğu keşif projesi Portekiz kralı tarafından reddedildi, sonunda bunu Kastilya Krallığı’nın genişlemesi için bir fırsat olarak gören Kral Fernando ve Kraliçe Isabel’in desteğiyle dört keşif gezisine çıktı. Hint ülkelerini değil ama Amerika’yı buldu. Bu dört yolculuğun hikâyesi Seyir Defterleri’nde bir araya gelmektedir. İlk yolculukta Kolomb’un tuttuğu notlar Bartolemé de las Casas’ın kaleminden çıkan bir özet halinde günümüze ulaşmıştır. İkinci yolculuğa dair bilgiler Kolomb’un Antonio de Torres’e gönderdiği bir mektuptan, üçüncü ve dördüncü yolculukların ana hatları da kral ve kraliçeye yazdığı mektuplardan edinilmiştir.  "
        }
    ],
    [
        188,
        {
            "isbn": "978-6053607038 ",
            "title": "İnsan Neyle Yaşar? ",
            "original-title": "Чем люди живы ",
            "original-language": "RU ",
            "originally-published": 1881,
            "written-by": [
                { "name": " Lev Nikolayeviç Tolstoy ", "role": "Author " },
                { "name": " Koray Karasulu ", "role": "Translator/Compiler" },
            ],
            "print-year": 2023,
            "genre": [" Literature", "Russian Literature ", " Novella",],
            "language": " TR",
            "publisher": "Türkiye İş Bankası Kültür Yayınları ",
            "edition": "37th ",
            "summary": "Anna Karenina, Savaş ve Barış, Kreutzer Sonat ve Diriliş’in büyük yazarı, yaşamının son otuz yılında kendini insan, aile, din, devlet, toplum, özgürlük, boyun eğme, başkaldırma, sanat ve estetik konularında kuramsal çalışmalara verdi. Bu dönemde yazdığı öykülerde yıllarca üzerinde düşündüğü insanlık sorunlarını edebi bir kurgu içinde ele aldı. Tolstoy, insan sevgisi ve inanç konularını ustalığının bütün inceliğiyle işlerken, İnsan Neyle Yaşar? ile gerçek hayatı yansıtan tabloların içinde yeni bir ahlak anlayışını ortaya koydu.  "
        }
    ],
    [
        189,
        {
            "isbn": "978-1626860988 ",
            "title": "The Complete Works of William Shakespeare  ",
            "original-title": "The Complete Works of William Shakespeare  ",
            "original-language": "EN ",
            "originally-published": 1623,
            "written-by": [
                { "name": "William Shakespeare ", "role": "Author " },
                { "name": " Michael A. Cramer PhD ", "role": "Compiler" },
            ],
            "print-year": 2014,
            "genre": ["Tragedy", "Dram"],
            "language": "EN ",
            "publisher": "Canterbury Classics ",
            "edition": "1th ",
            "summary": " No library is complete without the classics! This leather-bound edition includes the complete works of the playwright and poet William Shakespeare, considered by many to be the English language’s greatest writer. "
        }
    ],
    [
        190,
        {
            "isbn": " 978-6051217895",
            "title": "Kızıl Odanın Rüyası I",
            "original-title": "紅樓夢 (Hóng Lóu Mèng) ",
            "original-language": "CH",
            "originally-published": 1792,
            "written-by": [
                { "name": "Cao Xueqin", "role": "Author " },
                { "name": "Serpil Demirci ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Literature ", "Chinese Literature "],
            "language": "TR ",
            "publisher": "Elips Kitap ",
            "edition": " 1th",
            "summary": " Felsefi planda eser, Budist ve Taoist temalarla iç içedir: zenginlik, güç ve aşkın geçiciliği, dünyevi bağların aslında bir rüya veya yanılsama  olduğu fikri kitabın ana motifidir. Baoyu'nun hikâyesi sembolik olarak, gökten düşen ve insan dünyasında tecrübe kazanan mistik bir taşın hikâyesiyle çerçevelenir — bu yüzden eserin alternatif adı Taşın Hikâyesi'dir. "
        }
    ],
    [
        191,
        {
            "isbn": " 978-6051217901",
            "title": "Kızıl Odanın Rüyası II",
            "original-title": "紅樓夢 (Hóng Lóu Mèng) ",
            "original-language": "CH",
            "originally-published": 1792,
            "written-by": [
                { "name": "Cao Xueqin", "role": "Author " },
                { "name": "Serpil Demirci ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Literature ", "Chinese Literature "],
            "language": "TR ",
            "publisher": "Elips Kitap ",
            "edition": " 1th",
            "summary": " Felsefi planda eser, Budist ve Taoist temalarla iç içedir: zenginlik, güç ve aşkın geçiciliği, dünyevi bağların aslında bir rüya veya yanılsama olduğu fikri kitabın ana motifidir. Baoyu'nun hikâyesi sembolik olarak, gökten düşen ve insan dünyasında tecrübe kazanan mistik bir taşın hikâyesiyle çerçevelenir — bu yüzden eserin alternatif adı Taşın Hikâyesi'dir. "
        }
    ],
    [
        192,
        {
            "isbn": " 978-6051217918",
            "title": "Kızıl Odanın Rüyası III",
            "original-title": "紅樓夢 (Hóng Lóu Mèng) ",
            "original-language": "CH",
            "originally-published": 1792,
            "written-by": [
                { "name": "Cao Xueqin", "role": "Author " },
                { "name": "Serpil Demirci ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Literature ", "Chinese Literature "],
            "language": "TR ",
            "publisher": "Elips Kitap ",
            "edition": " 1th",
            "summary": " Felsefi planda eser, Budist ve Taoist temalarla iç içedir: zenginlik, güç ve aşkın geçiciliği, dünyevi bağların aslında bir rüya veya yanılsama olduğu fikri kitabın ana motifidir. Baoyu'nun hikâyesi sembolik olarak, gökten düşen ve insan dünyasında tecrübe kazanan mistik bir taşın hikâyesiyle çerçevelenir — bu yüzden eserin alternatif adı Taşın Hikâyesi'dir. "
        }
    ],
    [
        193,
        {
            "isbn": " 978-6051217925",
            "title": "Kızıl Odanın Rüyası IV",
            "original-title": "紅樓夢 (Hóng Lóu Mèng) ",
            "original-language": "CH",
            "originally-published": 1792,
            "written-by": [
                { "name": "Cao Xueqin", "role": "Author " },
                { "name": "Serpil Demirci ", "role": "Translator/Compiler" },
            ],
            "print-year": 2022,
            "genre": ["Literature ", "Chinese Literature "],
            "language": "TR ",
            "publisher": "Elips Kitap ",
            "edition": " 1th",
            "summary": " Felsefi planda eser, Budist ve Taoist temalarla iç içedir: zenginlik, güç ve aşkın geçiciliği, dünyevi bağların aslında bir rüya veya yanılsama olduğu fikri kitabın ana motifidir. Baoyu'nun hikâyesi sembolik olarak, gökten düşen ve insan dünyasında tecrübe kazanan mistik bir taşın hikâyesiyle çerçevelenir — bu yüzden eserin alternatif adı Taşın Hikâyesi'dir. "
        }
    ],
    [
        194,
        {
            "isbn": "978-6059961158",
            "title": "Kızıl Ejder",
            "original-title": "Red Dragon ",
            "original-language": "EN",
            "originally-published": 1981,
            "written-by": [
                { "name": "Thomas Harris", "role": "Author " },
                { "name": "Pınar Öcal ", "role": "Translator/Compiler" },
            ],
            "print-year": 2020,
            "genre": ["Crime ", "Fiction Novel"],
            "language": "TR ",
            "publisher": "Nemesis Kitap ",
            "edition": " 1th",
            "summary": "Gerilim okurlarının yakından tanıdığı Doktor Hannibal Lecter, okurların karşısına ilk olarak bu romanda çıkıyor.Thomas Harris, insan zihninin karanlık yüzünü büyük bir ustalıkla gözler önüne seriyor.Kızıl Ejder olarak bilinen katili yakalamaya kararlı olan FBI ajanı Will Graham, hem canını hem de akıl sağlığını riske atacağı, gizemli ve vahşi bir bilmecenin içinde buluyor kendini. Onun bu mücadeleden sağ çıkıp çıkamayacağı son derece sürükleyici bir dille anlatılırken, bir yandan da Doktor Hannibal Lecter, gerilim okurlarının aklında ve kalbinde iz bırakacak adımlarını atmaya başlıyor."
        }
    ],
]);