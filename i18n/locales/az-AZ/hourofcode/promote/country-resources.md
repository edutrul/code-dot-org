* * *

title: <%= hoc_s(:title_country_resources) %> layout: wide nav: promote_nav

* * *

<%= view :signup_button %>

<% if @country == 'la' %>

# Recursos

## Vídeos <iframe width="560" height="315" src="https://www.youtube.com/embed/HrBh2165KjE" frameborder="0" allowfullscreen></iframe>
<

p>[**¿Por qué todos tienen que aprender a programar? Participá de la Hora del Código en Argentina (5 min)**](https://www.youtube.com/watch?v=HrBh2165KjE)

  
 <iframe width="560" height="315" src="https://www.youtube.com/embed/_vq6Wpb-WyQ" frameborder="0" allowfullscreen></iframe>
<

p>[**La Hora del Código en Chile (2 min)**](https://www.youtube.com/watch?v=vq6Wpb-WyQ)

<% elsif @country == 'ca' %>

## Videolar <iframe width="560" height="315" src="https://www.youtube.com/embed/k3cg1e27zQM" frameborder="0" allowfullscreen></iframe>
<

p>[**Join Nova Scotia for the Hour of Code (3 min)**](https://www.youtube.com/watch?v=k3cg1e27zQM)

<% elsif @country == 'id' %>

Di luar dari fakata bahwa Pekan Edukasi Ilmu Komputer jatuh pada 7 hingga 13 Desember 2015, kami mengetahui bahwa banyak siswa-siswi Indonesia yang menjalankan prosesi ujian. Untuk alasan ini kami memutuskan untuk menjalankan masa kampanye Hour of Code di Indonesia pada 12 hingga 20 Desember 2015. Kita tetap akan merasakan kemeriahan yang sama dan dengan tujuan yang sama namun dengan kebersamaan yang lebih besar karena akan ada lebih banyak siswa-siswi yang dapat mengikutinya.

Mari bersama kita dukung gerakan Hour of Code di Indonesia!

<% elsif @country == 'jp' %>

## Hour of Code(アワーオブコード) 2015紹介ビデオ <iframe width="560" height="315" src="https://www.youtube.com/embed/_C9odNcq3uQ" frameborder="0" allowfullscreen></iframe>
<

p>[**Hour of Code(アワーオブコード) 2015紹介ビデオ (1 min)**](https://www.youtube.com/watch?v=_C9odNcq3uQ)

[Hour of Code Lesson Guide](/files/HourofCodeLessonGuideJapan.pdf)

<% elsif @country == 'pk' %>

اگر آپ کا تعلق پاکستان کےایسے کیمبرج اسکول سے ہے، جہاں دسمبر کے مہینے میں امتحانات لئے جاتے ہیں، تو آپ اپنے اسکول میں آور آف کوڈ کا انقعاد نومبر ٢٣ تا ٢٩ کے دوران بھی کر سکتے ہیں۔ آپ کا شمار دنیا کی سب سے بڑی تعلیمی تقریب میں حصّہ لینے والوں میں ہی کیا جائے گا۔

<% elsif @country == 'uk' %>

# How-to Guide for Organizations

## Use this handout to recruit corporations

[<%= localized_image('/images/fit-500x300/corporations.png') %>](%= localized_file('/files/corporations.pdf') %)

## 1) Dərs vəsaitlərindən istifadə edin:

We’ll host a variety of fun, hour-long tutorials, created by a variety of partners. New tutorials are coming to kick off the Hour of Code before <%= campaign_date('full') %>.

**Bütün Kod Saatı dərslikləri:**

  * Require minimal prep-time for organizers
  * Müstəqil tədris üçün yararlıdır - hər kəsə öz tempi və bacarığına uyğun iş seçməyə imkan verir

[![](https://uk.code.org/images/tutorials.png)](https://uk.code.org/learn)

## 2) Avadanlığa olan ehtiyacınızı planlaşdırın - kompüterlərin olması zəruri deyil

The best Hour of Code experience will be with Internet-connected computers. But you don’t need a computer for every participant, and can even do the Hour of Code without a computer at all.

  * **Şagirdlərin kompüter və avadanlığında çalışmaları test edin.** Əmin olun ki, hər şey qaydasındadır (video və səslə bağlı).
  * **Təbrik səhifələrinə baxın,** çalışma yekunlaşdıqda şagirdlərin nə ilə rastlaşacaqlarıyla tanış olun. 
  * **Provide headphones for your group**, or ask students to bring their own, if the tutorial you choose works best with sound.

## 3) Tədbirləri texnoloji imkanlarınıza uyğun planlaşdırın

  * **Kifayət qədər qurğunuz yoxdur?** Onda [cüt-cüt proqramlaşdırma](http://www.ncwit.org/resources/pair-programming-box-power-collaborative-learning)dan istifadə edin. When participants partner up, they help each other and rely less on the teacher.
  * **Şəbəkənizin ötürmə sürəti azdır?** Videoları sinfin qarşısında göstərməyi planlaşdırın ki, hər şagird özü üçün videoları endirməsin, ya da avadanlıqsız, oflayn dərslikləri sınayın.

## 4) Şagirdləri ruhlandırın - onlara video göstərin

Kod Saatına start vermək üçün şagirdlərinizə ruhlandırıcı bir video göstərin. Məsələn:

  * "Code.org"un Bill Qeyts, Mark Tsukerberq və NBA basketbol ulduzu Kris Boşun iştirakı ilə çəkilmiş ilk açılış videosu (Uzunluğu [1 dəqiqə](https://www.youtube.com/watch?v=qYZF6oIZtfc), [5 dəqiqə](https://www.youtube.com/watch?v=nKIu9yen5nc) və [9 dəqiqə](https://www.youtube.com/watch?v=dU1xS07N-FA) olan versiyalar var)
  * The [Hour of Code 2013 launch video](https://www.youtube.com/watch?v=FC5FbmsH4fw), or the [Hour of Code 2014 video](https://www.youtube.com/watch?v=96B5-JGA9EQ)
  * [Prezident Obamanın bütün şagirdləri infromatikanı öyrənməyə çağırması](https://www.youtube.com/watch?v=6XvmhE1J9PY)

**Şagirdlərinizlə həyəcanı bölüşün - mövzuya qısa giriş verin**

<% else %>

# Additional resources coming soon!

<% end %>

<%= view :signup_button %>