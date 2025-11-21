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
    ]
]);
