import { createStore } from "vuex";
import articles from "./models/articles";

export default createStore({
  state: {
    sections: [
      {
        name: "تصميم وبرمجة مواقع الويب",
        ename: "Website Development",
        poster: require("../assets/posters/web.webp"),
        icon: require("../assets/icons/web.gif"),
        description:
          "تعمل شركتنا على تصميم المواقع وبرمجتها بشكل احترافي، والتي تكون متوافقة مع مختلف الأجهزة الإلكترونية سواء كانت (كمبيوتر، موبايل، تابليت).",
        projects: [
          {
            name: "servant",
            link: "",
            media: [
              require("../assets/portfolio/web/servant/0.png"),
              require("../assets/portfolio/web/servant/2.png"),
              require("../assets/portfolio/web/servant/3.png"),
              require("../assets/portfolio/web/servant/4.png"),
            ],
          },
          {
            name: "emkan",
            link: "",
            media: [
              require("../assets/portfolio/web/emkan/cover.jpg"),
              require("../assets/portfolio/web/emkan/1.mp4"),
            ],
          },
          {
            name: "bravoo website",
            link: "",
            media: [
              require("../assets/portfolio/web/bravoo/cover.jpg"),
              require("../assets/portfolio/web/bravoo/1.mp4"),
            ],
          },
          {
            name: "portfolio website",
            link: "",
            media: [
              require("../assets/portfolio/web/portfolio website/cover.jpg"),
              require("../assets/portfolio/web/portfolio website/1.mp4"),
            ],
          },
        ],
        link: "web",
        paragraphs: [
          `
          <h4>
          أنواع المواقع المصممة:
          </h4>
          <ol>
            <li>
            	تصميم مواقع الشركات (Companies website develop)
              <p>
              من أهم علامات تميز الشركة هو موقعها الإلكتروني، حيث أن تصميم موقع الشركة يكون له دور أساسي في جذب أكبر عدد من العملاء للتعامل مع هذه الشركة أم لا، لذلك فإن دورنا هو تصميم مواقع الشركات بأرقى وأحدث الأساليب والذي يكو ناتجًا عن عمل دراسات لازمة حول الشركة والتركيز على إبراز أهم نقاط القوة التي تُقدم لعملاء شركتك بأبسط الطرق، عن طريق موقع رسمي يمثل الشركة على الإنترنت.
              </p>
            </li>
            <li>
            	تصميم المواقع الأخرى (Another websites develop) 
              <p>
              شركتنا تتميز بقدرتها على تصميم أي من أنواع المواقع الإلكترونية المختلفة، حيث أننا نمتلك خبراء في مختلف المواقع، وبالتالي فإننا قادرين دائمًا على تقديم أفضل الأشكال للمواقع سواء كانت مواقع إخبارية أم سياحية أو حتى عقارية، وغير ذلك من المواقع؛ حيث تتم عمل دراسة هامة على كل نوع وكل مجال لإخراج الموقع بأفضل صورة ممكنة.
              </p>
            </li>
            <li>
            	تصميم وبرمجة المتاجر الإلكترونية (Programming and design of stores)
                <p>
                وقتنا هذا هو عصر ازدهار التجارة الإلكترونية، يمكن لكل شخص اقتناء ما يريد وهو في منزله دون الاضطرار للخروج؛ هذا الأمر كان له دور في زيادة الطلب على تسوق مختلف المنتجات بشكل إلكتروني، كما كان سببًا في زيادة انتشار المتاجر الإلكترونية، وما يميز المتجر عن غيره هو المظهر العام للمتجر والاهتمام بالتفاصيل وتسهيل العرض على العملاء، وهذا ما نقوم به في 
                شركتنا، هو تقديم خدمة تصميم المتاجر الإلكترونية بشكل احترافي يجمع ما بين الرقي والبساطة، باختلاف هذه التجارة سواء كانت ( ملابس، إلكترونيات، إكسسوارات، وغير ذلك).
                </p>
            </li>
            </ol>
          `,
          `
          <h4>
          دورة حياة تصميم وبرمجة المواقع في شركة ICOM
          </h4>
          <b>الخطوة الأولى:</b> جمع المعلومات، (الغرض، الأهداف الرئيسية، الجمهور المستهدف)
          <ul>
            <li>
          	هذه هي أهم مرحلة في تصميم وتطوير الموقع، ينصب تركيز هذه المرحلة على جمع كل المعلومات اللازمة للمشروع. 
            </li>
            <li>
          	كفريق تصميم، نقوم بطرح الأسئلة ذات الصلة للتعمق في احتياجات العمل. ثم نقوم بتحليل متطلبات العميل بعناية، وتحديد الغرض من الموقع، وتحديد أهداف الموقع. حيث الأهداف الأكثر شيوعًا هي مشاركة المعلومات وكسب المال، أو كليهما. ثم يفكر فريقنا في كيفية الوصول إلى أهداف العميل بمساعدة موقع ويب جيد.
            </li>
            <li>
            بعد ذلك، نبحث عن الجمهور المستهدف. ما هي مجموعة الأشخاص التي تود الوصول إليها أولاً؟ ما هو سنهم 
            واهتماماتهم وعاداتهم؟ ستساعدك الإجابة عن هذه الأسئلة على تحديد أفضل أسلوب تصميم للموقع.
            </li>
          </ul>
          `,
          `
          <b>الخطوة الثانية:</b> التخطيط (planning)
          <ul>
            <li>
            الموقع الجيد هو نتيجة التخطيط الجيد" هو ما نؤمن به بعد جمع المعلومات، في هذه المرحلة، يتم تطوير خريطة الموقع (Site map).       
           </li>
            <li>
          	خريطة الموقع هي قائمة بجميع مجالات الموضوعات الرئيسية للموقع، بما في ذلك الموضوعات الفرعية، إن وجدت، ستوضح هذه الخريطة المحتوى الذي سيكون على موقع الويب وستساعد على فهم بنية التنقل.       
           </li>
            <li>
            	عملاء المستقبل هم المستخدمون النهائيون للموقع - يجب أن تكون رحلتهم بسيطة قدر الإمكان. أساس أي موقع ويب سهل التصفح هو واجهة مستخدم ممتازة.
             </li>
          </ul>
          `,
          `
          <b>الخطوة الثالثة:</b> تصميم رسومي (UI/UX)
          <ul>
            <li>
            	هذه هي المرحلة الإبداعية لتصميم الموقع؛ هذه هي المرحلة التي يضع فيها المصمم قلبه وروحه             
            </li>
            <li>
            	كجزء من عملية التصميم، من الضروري تطبيق العناصر المرئية بعناية وحسن الذوق مثل الشعار وألوان العلامة التجارية، لتعزيز هوية العلامة التجارية على موقع الويب.         
            </li>
            <li>
            	أثناء مرحلة التصميم، يقوم فريقنا عادةً بإنشاء نموذج أو أكثر للموقع. النموذج الأولي هو عادة صورة ثابتة، والتي تمثل المظهر النهائي للموقع. ويتم إنشاء نماذج أولية قابلة للنقر لمساعدة العميل على الشعور بموقع الويب قبل بدء التطوير.      
            </li>
            <li>
            	تتطلب هذه الخطوة عادةً الكثير من التواصل مع عملائنا لفهم كل جانب من جوانب توقعات العميل ومحاولة رسمها لذلك يعد تبادل الأفكار والعصف الذهني أمرًا بالغ الأهمية في هذه الخطوة.
            </li>
          </ul>
          `,
          `
          <b>الخطوة الرابعة:</b> التطوير(Development) 
          <ul>
            <li>
            	بعد التصميم، هناك مرحلة تطوير تعرف أيضا باسم "مرحلة التنفيذ". الآن، هذه هي المرحلة التي يبدأ فيها موقع الويب الفعلي الخاص بك في تنفيذه، مرحلة التطوير هي أيضا مرحلة حاسمة جدا لتصميم الموقع.
            </li>
            <li>
            	في هذه المرحلة، يجب أن يكون التصميم نفسه جاهزًا. لكنها عادة ما تكون في شكل صور ثابتة. يتطلب الأمر جهودًا 
            تطويرية إضافية لترجمتها إلى HTML وCSS، ثم إضافة طبقة من الرسوم المتحركة أو JavaScript واستخدام إطار عمل مناسب، اعتمادًا على مدى تعقيد التصميم.
            </li>
            <li>
            	ثم برمجة الخلفية المتكيفة مع الموقع (customize back-end).
            </li>
          </ul>
          `,
          `
          <b>الخطوة الخامسة:</b> الاختبار (test) 
          <ul>
            <li>
            	عندما يكون المحتوى والعناصر المرئية في مكانها الصحيح، يمكن بدء عملية الاختبار.
            </li> 
            <li>
            	نقوم باختبار كل صفحة للتأكد من أن جميع الروابط تعمل وأن الموقع معروض بشكل صحيح في متصفحات مختلفة. حتى ترتيب الكلمات في العناوين والأوصاف له تأثير على أداء صفحة الويب في محركات البحث المختلفة.
            </li>
          </ul>
          `,
          `
          <b>الخطوة السادسة:</b> التسليم والانطلاق
          <ul>
            <li>
            	بمجرد حصولنا على الموافقة النهائية من العميل، فقد حان الوقت لبدء تشغيل موقع الويب. ولكن قبل ذلك، نقوم بتشغيل الموقع للمرة الأخيرة للتأكد من أنه تم تحميل جميع الملفات بشكل صحيح، وأن الموقع يعمل بكامل طاقته.
            </li>
          </ul>
          `,
          `
          <b>الخطوة السابعة والأخيرة: </b> أعمال الصيانة
          <p>
            	بمجرد تشغيل الموقع، عادة ما تكون هناك حاجة إلى بعض الصيانة الدورية. نقوم بإجراء اختبار المستخدم على محتوى وميزات جديدة مرارًا وتكرارًا لتحسين قابلية الاستخدام واكتشاف الميزات. كل هذا يمكن أن يؤدي إلى مهام تصميم وتطوير جديدة.
          </p>
          `,
        ],
      },
      {
        name: "تصميم وبرمجة تطبيقات الهاتف المحمول",
        ename: "Mobile Application Development",
        poster: require("../assets/posters/mobile.webp"),
        icon: require("../assets/icons/mobile.gif"),
        description: `
        نقوم دائمًا بتصميم تطبيقات الهاتف المحمول بشكل مميز واحترافي للغاية، وينتج ذلك عن وجود فريق عمل يتمتع بخبرة واحترافية كبيرة في تصميم مختلف التطبيقات سواء كانت (تطبيقات 
          شركات، تطبيقات تجارية، ألعاب)، وهذه التطبيقات تدعم نظامي (IOS وAndroid)، فهي تكون مصممة بشكل بسيط وجذاب.
        `,
        projects: [
          {
            name: "donuts",
            link: "..",
            media: [
              require("../assets/portfolio/mobile/donuts/0.jpg"),
              require("../assets/portfolio/mobile/donuts/1.png"),
              require("../assets/portfolio/mobile/donuts/2.png"),
              require("../assets/portfolio/mobile/donuts/3.png"),
              require("../assets/portfolio/mobile/donuts/4.mp4"),
            ],
          },
          {
            name: "bravoo app",
            link: "..",
            media: [
              require("../assets/portfolio/mobile/bravo/cover.jpg"),
              require("../assets/portfolio/mobile/bravo/1.mp4"),
            ],
          },
        ],
        paragraphs: [
          `
          <h4>
          دورة حياة تصميم وبرمجة التطبيقات في شركة ICOM 
          </h4>
          <b>المرحلة األولى:</b> التأكيد على الفكرة
          <p>
          قبل الدخول في المراحل التقنية في البداية نتحدث مع عملائنا حول الفكرة وكيفية تصميمها وما هو الغرض من تصميم التطبيق وماهي الخدمات التي يرغب أن يضيفها في التطبيق.   
          </p>
          `,
          `
          <b>المرحلة الثانية:</b>  أبحاث السوق (Market Research)
          <p>
          الآن هو الوقت المناسب للقيام بالجزء الأكثر أهمية من رحلتك. تظهر لك أبحاث السوق الطلب الحقيقي أو الاهتمام بالسوق. وفقا لذلك، يمكن أن يقترح عليك أبحاث السوق بتعديل فكرتك، ويمكن أن يمنحك البحث قائمة واضحة بالمتطلبات التي يمكن أن تساعدك على تحديد أولويات العمل.
           </p>
          `,
          `
          <b>المرحلة الثالثة:</b>  إنشاء إطارسلكي لتطبيقك (wireframe)
          <p>
          بمجرد أن تصبح قائمة أفكارك جاهزة، فقد حان الوقت لوضع شكل لفكرتك - Wireframes. يمكنك اعتبارالإطارالسلكي كمخطط للتطبيق الخاص بك. سيعرض تصميم تطبيقك ووظائفك. أيضا، سوف يساعدك على فهم مظهر وعمل التطبيق
         </p>
          `,
          `
          <b>المرحلة الرابعة:</b>  التطوير(Development)
            <p>
            حان الوقت لإعطاء بنية مناسبة لمشروع أحلامك. تغطي هذه العملية جزء الكود والإدراك 
            الفعلي لتطبيقك. تتضمن مراحل تطوير تطبيقات الهاتف المحمول أنشطة متعددة مثل إنشاء بيئة التطوير المناسبة، وتطوير أجزاء مختلفة من الكود، والاختبار الأولي، وإنشاء تطبيق الهاتف المحمول الذي يمكن تثبيته واختباره.
            </p>
          `,
          `
          <b>المرحلة الخامسة:</b>  الاختبار(test)
            <p>
            تساعد عملية مراجعة الكود أثناء التطوير في التأكد من عدم وجود أخطاء كبيرة في النهاية لحلها. هنا تتماشى عملية التطوير الخاصة بنا مع مراجعة التعليمات البرمجية كجزء من التعليمات البرمجية اليومية
           </p>
          `,
          `
          <b>المرحلة السادسة:</b>  تشغيل نسخة تجريبية من التطبيق
            <p>
            يمكن للإصدار التجريبي لأي تطبيق من جذب المتبنين الأوائل، وهي خطوة مهمة في جعل تطبيق الجوال الخاص بك سائدا. يقدم المتبنيون الأوائل الكثير من التعليقات المفيدة 
            حول إيجابيات وسلبيات تطبيقك. ويمكن أن تساعدك خبرتهم وتقييمهم على فهم قبول التطبيق والطلب أيضا. سيعزز هذا النوع من التسويق الشفهي لتطبيقك الجوال سمعته، ويساعد المسؤول على اكتساب المزيد من المستخدمين.
            </p>
          `,
          `
          <b>المرحلة السابعة:</b> تشغيل التطبيق
            <p>
            لقد صممنا الهيكل واختبرنا وطورنا تطبيقك. حان الوقت الآن لإطلاقه في متجر Google Play أو متجر App store
           </p>
          `,
        ],
        link: "mobile",
      },
      {
        name: "التسويق عبر منصات التواصل الاجتماعي",
        ename: "Socialmedia Marketing",
        poster: require("../assets/posters/social.webp"),
        icon: require("../assets/icons/social.gif"),
        description:
          "شركة ICOM يمكنك أن تطلق عليها هي الظهر والسند لمختلف العلامات التجارية، فمنذ بداية تأسيس مشروعك، وبخطوات بسيطة وبإبداع كبير تستطيع الشركة أن تنقل علامتك نقلة تاريخية، تجعلها تنافس الكبار، فهذا الآمر ناتج عن فريق عمل قوي ومتعاون يهدف لتحقيق النجاحات من خلال التسويق عبر منصات التواصل الاجتماعي مثل: (فيسبوك، انستغرام، سناب شات، إلخ..",
        projects: [
          {
            name: "mr smile",
            link: "",
            media: [
              require("../assets/portfolio/social/mr_smile/0.jpg"),
              require("../assets/portfolio/social/mr_smile/1.png"),
              require("../assets/portfolio/social/mr_smile/2.jpg"),
            ],
          },
          {
            name: "اطعمة ايطالية",
            link: "",
            media: [
              require("../assets/portfolio/social/italian food/0.jpg"),
              require("../assets/portfolio/social/italian food/1.png"),
              require("../assets/portfolio/social/italian food/2.png"),
              require("../assets/portfolio/social/italian food/3.png"),
              require("../assets/portfolio/social/italian food/4.png"),
              require("../assets/portfolio/social/italian food/5.png"),
              require("../assets/portfolio/social/italian food/6.png"),
              require("../assets/portfolio/social/italian food/7.png"),
              require("../assets/portfolio/social/italian food/8.png"),
              require("../assets/portfolio/social/italian food/9.png"),
              require("../assets/portfolio/social/italian food/10.jpg"),
              require("../assets/portfolio/social/italian food/11.jpg"),
              require("../assets/portfolio/social/italian food/12.jpg"),
            ],
          },
          {
            name: "اطعمة غربية",
            link: "",
            media: [
              require("../assets/portfolio/social/western food/0.jpg"),
              require("../assets/portfolio/social/western food/1.jpg"),
              require("../assets/portfolio/social/western food/2.jpg"),
              require("../assets/portfolio/social/western food/3.jpg"),
            ],
          },
          {
            name: "حلوى",
            link: "",
            media: [
              require("../assets/portfolio/social/sweets/0.jpg"),
              require("../assets/portfolio/social/sweets/1.jpg"),
            ],
          },
          {
            name: "الأعياد",
            link: "",
            media: [
              require("../assets/portfolio/social/eids/0.png"),
              require("../assets/portfolio/social/eids/1.jpg"),
              require("../assets/portfolio/social/eids/2.jpg"),
              require("../assets/portfolio/social/eids/3.jpg"),
            ],
          },
          {
            name: "almerigan",
            link: "",
            media: [
              require("../assets/portfolio/social/Almerigan/1.jpg"),
              require("../assets/portfolio/social/Almerigan/2.jpg"),
              require("../assets/portfolio/social/Almerigan/3.jpg"),
              require("../assets/portfolio/social/Almerigan/4.jpg"),
              require("../assets/portfolio/social/Almerigan/5.jpg"),
              require("../assets/portfolio/social/Almerigan/6.jpg"),
              require("../assets/portfolio/social/Almerigan/7.jpg"),
              require("../assets/portfolio/social/Almerigan/8.jpg"),
              require("../assets/portfolio/social/Almerigan/9.jpg"),
              require("../assets/portfolio/social/Almerigan/10.jpg"),
            ],
          },
          {
            name: "العطور",
            link: "",
            media: [
              require("../assets/portfolio/social/perfumes/0.png"),
              require("../assets/portfolio/social/perfumes/1.jpg"),
              require("../assets/portfolio/social/perfumes/2.jpg"),
              require("../assets/portfolio/social/perfumes/3.jpg"),
              require("../assets/portfolio/social/perfumes/4.jpg"),
              require("../assets/portfolio/social/perfumes/5.jpg"),
              require("../assets/portfolio/social/perfumes/6.jpg"),
              require("../assets/portfolio/social/perfumes/7.jpg"),
              require("../assets/portfolio/social/perfumes/8.png"),
              require("../assets/portfolio/social/perfumes/9.png"),
              require("../assets/portfolio/social/perfumes/10.png"),
            ],
          },
        ],
        paragraphs: [
          `
          <h4>
          دورة حياة التسويق عبر منصات التواصل الاجتماعي في شركة ICOM
          </h4>
          <b>المرحلة األولى:</b> تحديد buyer persona and audience
          <p>
          تتمثل خطوتنا الأولى إنشاء استراتيجية تسويق عبر وسائل التواصل الاجتماعي في تحديد هوية المشتري والجمهور حتى تتمكن من استهداف احتياجاتهم واهتماماتهم بشكل مناسب
          </p>
          `,
          `
          <b>المرحلة الثانية:</b>  تحديد المنصات الاجتماعية التي ستقوم بالتسويق عليها
          <p>
          من خلال البحث وتحديد buyer persona and audience يمكننا أن نحدد المنصة التي يتواجد 
          عليها جمهورك المستهدف حتى نسوق لهم المنتج أو الخدمة التي تقدمها.
          </p>
          `,
          `
          <b>المرحلة الثالثة:</b>  تحديد أهم مقاييسك ومؤشرات الأداء الرئيسية
          <p>
          تكون استراتيجيتنا لوسائل التواصل الاجتماعي قائمة على البيانات. هذا يعني التركيز على مقاييس وسائل التواصل الاجتماعي المهمة. بدلا من التركيز على مقاييس الغرور، نبحث في البيانات التي تتوافق مباشرة مع أهدافك.
         </p>
          `,
          `
          <b>المرحلة الرابعة:</b>  التعرف على منافسيك
            <p>
            من خلال البحث نقوم بمعرفة أهم لمنافسين لك وهم الذين يقدمون الخدمة أو المنتج الذي تقدمه، وبناء على تحديد المنافسين نستخدم أساليبنا كي تكون أنت أفضل منهم أو على الأقل في نفس مستواهم.
            </p>
          `,
          `
          <b>المرحلة الخامسة:</b>  إنشاء محتوى فريد وجذاب
            <p>
            من خلال هذه المرحلة نقوم بجذب العملاء إليك، فمن خلال البحث يمكننا استخدام المحتوى المناسب لكل فئة من عملائك لكي نجذبهم، ويختلف المحتوى باختلاف المنتج والخدمة والجمهور، فهو يعد من أهم عوامل جذب العملاء.
             </p>
          `,
          `
          <b>المرحلة السادسة:</b>  تنظيم جدول زمني لمشاركاتك.
            <p>
            لا تكون المشاركة على منصات التواصل الاجتماعي بشكل عشوائي، لكن يتم تحديدها على عدة عوامل، وفي شركتنا نستهدف أهم الأوقات التي يتواجد فيها عملائك على منصات التواصل الاجتماعي حتى تصلهم مشاركاتك.
            </p>
          `,
        ],
        link: "social",
      },
      {
        name: "تصميم العلامة التجارية والهوية البصرية",
        ename: "Branding & Identity",
        poster: require("../assets/posters/branding.webp"),
        icon: require("../assets/icons/branding.gif"),
        description:
          "سواء كنت تقرر اسمًا لمنتج أو خدمة أو شعار جديد، فأنت بحاجة إلى إنشاء أداة تتميز بها عن منافسيك. أنت بحاجة إلى أكثر من مجرد اسم ونموذج وطباعة. تتعلق العلامة التجارية بفهم السمات التي يقدرها جمهورك المستهدف في الأعمال التجارية ومزج قيم وشخصيتك التجارية مع هذه السمات. الفكرة هي عرض ما يدور حوله عملك بطريقة تتواصل مع جمهورك المستهدف، وهذا تجده دائمًا في ICOM ",
        projects: [
          {
            name: "chef gabi",
            link: "",
            media: [
              require("../assets/portfolio/branding/chef-gabi/0.jpg"),
              require("../assets/portfolio/branding/chef-gabi/1.jpg"),
              require("../assets/portfolio/branding/chef-gabi/2.jpg"),
              require("../assets/portfolio/branding/chef-gabi/3.jpg"),
              require("../assets/portfolio/branding/chef-gabi/4.jpg"),
              require("../assets/portfolio/branding/chef-gabi/5.jpg"),
              require("../assets/portfolio/branding/chef-gabi/6.jpg"),
              require("../assets/portfolio/branding/chef-gabi/7.jpg"),
              require("../assets/portfolio/branding/chef-gabi/8.jpg"),
            ],
          },
          {
            name: "mr smile",
            link: "",
            media: [
              require("../assets/portfolio/branding/mr-smile/0.jpg"),
              require("../assets/portfolio/branding/mr-smile/1.jpg"),
              require("../assets/portfolio/branding/mr-smile/2.jpg"),
              require("../assets/portfolio/branding/mr-smile/3.jpg"),
              require("../assets/portfolio/branding/mr-smile/4.jpg"),
              require("../assets/portfolio/branding/mr-smile/5.jpg"),
              require("../assets/portfolio/branding/mr-smile/6.jpg"),
              require("../assets/portfolio/branding/mr-smile/7.jpg"),
              require("../assets/portfolio/branding/mr-smile/8.jpg"),
              require("../assets/portfolio/branding/mr-smile/9.jpg"),
              require("../assets/portfolio/branding/mr-smile/10.jpg"),
              require("../assets/portfolio/branding/mr-smile/11.jpg"),
              require("../assets/portfolio/branding/mr-smile/12.jpg"),
            ],
          },
          {
            name: "street",
            link: "",
            media: [
              require("../assets/portfolio/branding/street/0.png"),
              require("../assets/portfolio/branding/street/1.jpg"),
              require("../assets/portfolio/branding/street/2.png"),
              require("../assets/portfolio/branding/street/3.png"),
              require("../assets/portfolio/branding/street/4.png"),
              require("../assets/portfolio/branding/street/5.png"),
            ],
          },
          {
            name: "PS4Elite",
            link: "",
            media: [
              require("../assets/portfolio/branding/PS4Elite/0.jpg"),
              require("../assets/portfolio/branding/PS4Elite/1.jpg"),
              require("../assets/portfolio/branding/PS4Elite/2.jpg"),
              require("../assets/portfolio/branding/PS4Elite/3.jpg"),
              require("../assets/portfolio/branding/PS4Elite/4.jpg"),
              require("../assets/portfolio/branding/PS4Elite/5.jpg"),
              require("../assets/portfolio/branding/PS4Elite/6.jpg"),
              require("../assets/portfolio/branding/PS4Elite/7.jpg"),
              require("../assets/portfolio/branding/PS4Elite/8.jpg"),
            ],
          },
          {
            name: "berain",
            link: "",
            media: [
              require("../assets/portfolio/branding/Berain/1.1.jpg"),
              require("../assets/portfolio/branding/Berain/2.1.jpg"),
              require("../assets/portfolio/branding/Berain/2.jpg"),
              require("../assets/portfolio/branding/Berain/3.jpg"),
              require("../assets/portfolio/branding/Berain/4.jpg"),
              require("../assets/portfolio/branding/Berain/5.jpg"),
              require("../assets/portfolio/branding/Berain/6.jpg"),
              require("../assets/portfolio/branding/Berain/7.jpg"),
              require("../assets/portfolio/branding/Berain/8.jpg"),
              require("../assets/portfolio/branding/Berain/9.jpg"),
              require("../assets/portfolio/branding/Berain/10.jpg"),
              require("../assets/portfolio/branding/Berain/11.jpg"),
              require("../assets/portfolio/branding/Berain/12.jpg"),
              require("../assets/portfolio/branding/Berain/13.jpg"),
              require("../assets/portfolio/branding/Berain/14.jpg"),
              require("../assets/portfolio/branding/Berain/15.jpg"),
              require("../assets/portfolio/branding/Berain/16.jpg"),
              require("../assets/portfolio/branding/Berain/17.jpg"),
              require("../assets/portfolio/branding/Berain/18.jpg"),
            ],
          },
          {
            name: "booking",
            link: "",
            media: [
              require("../assets/portfolio/branding/Boooking/1.jpg"),
              require("../assets/portfolio/branding/Boooking/1_2.jpg"),
              require("../assets/portfolio/branding/Boooking/2.jpg"),
              require("../assets/portfolio/branding/Boooking/3.jpg"),
              require("../assets/portfolio/branding/Boooking/4.jpg"),
              require("../assets/portfolio/branding/Boooking/5.jpg"),
              require("../assets/portfolio/branding/Boooking/6.jpg"),
              require("../assets/portfolio/branding/Boooking/7.jpg"),
              require("../assets/portfolio/branding/Boooking/8.jpg"),
              require("../assets/portfolio/branding/Boooking/9.jpg"),
            ],
          },
          {
            name: "mcc logo",
            link: "",
            media: [
              require("../assets/portfolio/branding/Mcc Logo/Cover.jpg"),
              require("../assets/portfolio/branding/Mcc Logo/1.jpg"),
              require("../assets/portfolio/branding/Mcc Logo/2.jpg"),
              require("../assets/portfolio/branding/Mcc Logo/3.jpg"),
              require("../assets/portfolio/branding/Mcc Logo/4.jpg"),
              require("../assets/portfolio/branding/Mcc Logo/5.jpg"),
              require("../assets/portfolio/branding/Mcc Logo/6.jpg"),
              require("../assets/portfolio/branding/Mcc Logo/7.jpg"),
              require("../assets/portfolio/branding/Mcc Logo/8.jpg"),
            ],
          },
        ],
        paragraphs: [
          `
          <h4>
          مراحل بناء العلامة التجارية والهوية البصرية في شركة ICOM
          </h4>
          <b>المرحلة األولى:</b> أهداف العمل وشخصية العلامة التجارية
          <p>
          بالطبع، ليس المصمم هو من يحدد أهداف الشركة أو يحدد شخصيتها، ومع ذلك فهو أساس جميع عمليات العلامة التجارية. لتلقي النتائج المتوقعة، لذلك نقوم بتحديد الأولويات والقيم عند نقطة البداية حتى يتمكن الطاقم الذي يعمل على وضع العلامات التجارية من معرفة الطريق الذي يجب أن يسلكه.
          </p>
          `,
          `
          <b>المرحلة الثانية:</b>  أبحاث السوق والمستخدم
          <p>
          عندما يتم تحديد الأهداف وتبدو شخصية الشركة واضحة، تذهب شركة ICOM إلى العمل 
          البحثي. هذه الخطوة ضرورية لجميع أنواع وظائف المصمم، سواء كان ذلك شعارا أو تطبيقا للجوال. يساعد البحث على الانغماس في بيئة العلامة التجارية المستقبلية وفهم الخصائص المميزة التي قد تؤثر على نجاحها.
          </p>
          `,
          `
          <b>المرحلة الثالثة:</b>  تصميم اللوجو
          <p>
          غالبا ما يخطئ بعض الأشخاص في أن يكون الشعار علامة تجارية، لكنها مجرد مرحلة واحدة في عملية العلامة التجارية. ومع ذلك، سيكون من الخطأ التقليل من أهمية دور تصميم الشعار. إنها العلامة الأساسية لهوية العلامة التجارية، وأبرز رمز لصورة العلامة التجارية وأساس استراتيجية التسويق الفعالة التي تمكنها من التواصل مع الجمهور المستهدف.
         </p>
          `,
          `
          <b>المرحلة الرابعة:</b> العناصر المرئية للعلامة التجارية
            <p>
            تصميم الشعار ليس هو التمثيل المرئي الوحيد للعلامة التجارية. بالتأكيد، سيكون التركيز الرئيسي دائما هو الشعار ولكن هناك بعض العناصر الأخرى التي نهتم بها في شركتنا مثل الطباعة
            </p>
          `,
          `
          <b>المرحلة الخامسة:</b>  : نمط العلامة التجارية للشركات
            <p>
            عندما يكون الشعار جاهزا، يتم اختيار لوحة الألوان، ويتم تجهيز العناصر المرئية الأخرى، فقد حان الوقت لتوحيدها في أسلوب الشركة بشكل متناسق.
             </p>
          `,
          `
          <b>المرحلة السادسة:</b> دليل النمط
            <p>
            لقد انتهي العمل، المواد المرئية كاملة. المهمة الأخيرة التي نقوم بها هي التأكد من أن العملاء سيستخدمون جميع الأصول بشكل صحيح. دليل النمط هو مستند يقدم إرشادات حول الطرق الصحيحة والخاطئة لاستخدام الرسومات التي تم إنشاؤها للعلامة التجارية. تقليديا، يتضمن دليل الأسلوب شرح فكرة الوقوف خلف الشعار بالإضافة إلى عرض لوحة ألوان الشركة التي يمكن استخدامها لأغراض مختلفة. فقد نقوم بتوضيح أمثلة على الاستخدام غير الصحيح لتجنب ضعف الأداء البصري.
             </p>
          `,
        ],
        link: "branding",
      },
      {
        name: "تهيئة محركات البحث ",
        ename: "Search Engine Optimization",
        poster: require("../assets/posters/seo.webp"),
        icon: require("../assets/icons/seo.gif"),
        description:
          "أي موقع أو متجر إلكتروني يحتاج إلى بعض الطرق والخوارزميات لكي تساعده على الظهور في محركات بحث جوجل، وهذا يتم في شركتنا ICOM  من خلال عمل قوي في الـ (SEO) يستطيع بالنهوض إلى موقعك تدريجياً إلى الصفحة الأولى في محركات بحث جوجل.",
        projects: [],
        paragraphs: [
          `
          <h4>
          دورة حياة تهيئة محركات البحث (SEO) في شركة ICOM
          </h4>
          <b>المرحلة األولى:</b> تحليل تحسين محركات البحث خارج الموقع
          <p>
          تحليل الكلمات الرئيسية الشامل هو أساس كل تحسين محرك بحث. بالإضافة إلى ذلك، تتضمن هذه الخطوة تحليل المنافسين، والروابط (الداخلية والخارجية)، ورؤية وسائل التواصل الاجتماعي والاستخدام الدولي وتعدد اللغات للموقع.
          </p>
          `,
          `
          <b>المرحلة الثانية:</b>  التحسينات الفنية لتحسين محركات البحث (SEO)
          <p>
          لا تتضمن تحسينات تحسين محركات البحث التقنية استخدام علامات تحسين 
          محركات البحث ذات الصلة بشكل صحيح مثل علامات العنوان والأوصاف الوصفية وعلامات العناوين فحسب، بل تتضمن أيضا تحسين سرعة تحميل الصفحة واستخدام البيانات المنظمة. علاوة على ذلك، تتضمن التحقق من أن محركات البحث يمكنها فهرسة جميع الصفحات ذات الصلة 
          </p>
          `,
          `
          <b>المرحلة الثالثة:</b>  التحقق من سهولة الاستخدام
          <ul>
          <li>
          	في هذه الخطوة يتم تقييم قابلية استخدام موقع الويب. مهمتنا هي أن يكون موقع الويب سهل الاستخدام عند الوصول إليه من أجهزة الكمبيوتر المكتبية وكذلك من الأجهزة المحمولة.
          </li>
          <li>
          	أصبحت سهولة الاستخدام للهواتف الذكية مهمة جدا، يتم توفير دليل على هذه الحقيقة من خلال الدراسات حول سلوك المستخدم والعديد من 
          التوصيات الجديدة المقدمة من Google في الأشهر الماضية.
          </li>
         </ul>
          `,
          `
          <b>المرحلة الرابعة:</b> بناء الروابط
            <p>
            في هذه الخطوة، نستخدم المعلومات المستمدة من التحليل خارج الموقع كأساس لإدخال تحسينات على كمية وجودة الروابط الخارجية.
            </p>
          `,
          `
          <b>المرحلة الخامسة:</b>  : المحتوى التسويقي
            <p>
            سيقوم المستخدمون بسهولة بالمشاركة والارتباط بمحتوى عالي الجودة. لهذا السبب نهتم بتسويق المحتوى والذي يعد مكونا مهما لاستراتيجية تحسين محركات البحث.
             </p>
          `,
          `
          <b>المرحلة السادسة:</b>  التسويق في وسائل التواصل الاجتماعي
            <p>
            إن ظهور موقع ويب في وسائل التواصل الاجتماعي له تأثير إيجابي على تصنيفات محركات البحث، تماما مثل الروابط الخلفية. نتيجة لذلك نقوم بالتسويق عبر وسائل التواصل الاجتماعي والذي يعد جزءا من تحسين محركات البحث الناجح مع جميع الخطوات السابقة.
            </p>
          `,
        ],
        link: "seo",
      },
      {
        name: "تصميم داخلي",
        ename: "Interior Design",
        poster: require("../assets/posters/interior.webp"),
        icon: require("../assets/icons/interior.gif"),
        description:
          "التصميم الداخلي أو الـ (Interior Design) هو فن لا يُستغنى عنه، لذلك فإننا نقدم حلولاً معمارية عصرية ومبتكرة، تعمل على المساعدة في بناء كل مساحة بالطريقة التي تلائمها، نحن نستغل كل المساحات لنخرجها بأفضل صورة ممكنة، معنا يمكن تحويل الا شيء إلى كل شيء",
        projects: [
          {
            name: "تصميم داخلي",
            link: "",
            media: [
              require("../assets/portfolio/interior/inner/0.jpg"),
              require("../assets/portfolio/interior/inner/1.jpg"),
              require("../assets/portfolio/interior/inner/2.jpg"),
              require("../assets/portfolio/interior/inner/3.jpg"),
              require("../assets/portfolio/interior/inner/4.jpg"),
              require("../assets/portfolio/interior/inner/5.jpg"),
              require("../assets/portfolio/interior/inner/6.jpg"),
              require("../assets/portfolio/interior/inner/7.jpg"),
            ],
          },
          {
            name: "تصميم خارجي",
            link: "",
            media: [
              require("../assets/portfolio/interior/outer/0.jpg"),
              require("../assets/portfolio/interior/outer/1.jpg"),
              require("../assets/portfolio/interior/outer/2.jpg"),
              require("../assets/portfolio/interior/outer/3.jpg"),
            ],
          },
        ],
        link: "interior",
        paragraphs: [],
      },
      {
        name: "الدعم الفني",
        ename: "Technical Support",
        poster: require("../assets/posters/support.webp"),
        icon: require("../assets/icons/support.gif"),
        description:
          "إن خدمة ما بعد البيع هي أهم ما يميزنا، نحن نمتلك فريق دعم فني متكامل ومتوفر على مدار الساعة لتقديم حلول لكافة المشاكل التي من الممكن أن تواجهها، معنا أنت في أمان.",
        projects: [],
        paragraphs: [],
        link: "tech-support",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {
    articles,
  },
});
