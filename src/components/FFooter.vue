<template>
  <footer>
    <div class="conatiner">
      <div>
        <span>عن الشركة</span>
        <p>
          شركة ICOM تقدم خدمات احترافية في مختلف قطاعات السوق الرقمي، لنرتقي
          بمستوى الخدمات الإلكترونية المقدمة إلى قطاع الأعمال عبر باقات من
          الخدمات المتنوعة، محاولين تحقيق أفضل معدل وصول لمنتجاتهم وخدماتهم عبر
          توسيع قاعدة مستخدميهم، وكذلك رفع معدلات أرباحهم، ليكونوْا روادًا في
          مجالهم
        </p>
        <m-button
          type="bordered"
          style="color: white"
          @click="
            $refs.mpop.show({
              title: 'اترك لنا استفسارك وسنقوم بالرد عليك في أسرع وقت',
            })
          "
          >اسأل سؤالاً</m-button
        >
        <transition name="fade-back" >
          <m-poppup ref="mpop">
            <form style="width:initial !important;">
              <input
                type="text"
                placeholder="أدخل اسمك الكامل"
                v-model="messageForm.name"
              />
              <h6 id="nameQErrors" style="color:red"></h6>
              <input
                type="email"
                placeholder="أدخل بريدك الالكتروني"
                v-model="messageForm.email"
              />
              <h6 id="emailQErrors" style="color:red"></h6>

              <textarea
                placeholder="أدخل استفسارك"
                v-model="messageForm.question"
              />
              <h6 id="questionQErrors" style="color:red"></h6>

              <m-button
              @click="sendQuestion()"
              >إرسال</m-button>
                <h6 id="successQ" style="color:green"></h6>
            </form>
            <button class="close" @click="$refs.mpop.respond(false)">
              <i class="fas fa-times"></i>
            </button>
          </m-poppup>
        </transition>
      </div>
      <ul class="contact">
        <li>تواصل معنا</li>
        <li>
          <i class="fa-brands fa-whatsapp"></i>
          <a href="https://wa.me/+963991070885">963991070885+</a>
        </li>
        <li>
          <i class="fa fab fa-facebook"></i>
          <a href="https://www.facebook.com/IcomDigitalAgency/">ICOM</a>
        </li>
        <li>
          <i class="fa-brands fa-instagram"></i>
          <a href="https://www.instagram.com/icom.digital/">icom.digital</a>
        </li>
        <li>
          <i class="fa-solid fa-envelope"></i>
          <a href="mailto:info@icom-digital.com">info@icom-digital.com</a>
        </li>
      </ul>
      <ul>
        <li>عن أعمالنا</li>
        <li
          v-for="section in $store.state.sections.filter(
            (s) => s.projects.length > 0
          )"
          :key="section.name"
        >
          <router-link :to="`/${section.link}`">{{ section.name }}</router-link>
        </li>
      </ul>
      <ul>
        <li>روابط</li>
        <li><m-button  href="/">الرئيسية</m-button></li>
        <li><m-button  href="/#about">عن الشركة</m-button></li>
        <li><m-button  href="/#services">خدماتنا</m-button></li>
      </ul>
    </div>
    <div class="rights">
      www.icom-digital.com &#169; 2022-جميع الحقوق محفوظة
    </div>
  </footer>
</template>

<script>
import axios from "axios";

export default {
  name: "FFooter",
  data() {
    return {
      messageForm: {
        name: "",
        question: "",
        email: "",
      },
    };
  },
  methods: {
    async sendQuestion() {
       var flag = false;
         document.getElementById("nameQErrors").innerText ="";
        document.getElementById("emailQErrors").innerText ="";
        document.getElementById("questionQErrors").innerText ="";

       if(this.messageForm.name==""){
        document.getElementById("nameQErrors").innerText ="حقل الاسم مطلوب";
        flag = true;
        }
           var mailformat = /^\S+@\S+\.\S+$/;
         if(!this.messageForm.email.match(mailformat)){
        document.getElementById("emailQErrors").innerText ="يرجى إدخال إيميل صحيح ";

        flag = true;


        }
       if(this.messageForm.email ==""){
              document.getElementById("emailQErrors").innerText ="حقل الإيميل مطلوب ";
            flag = true;
        }
       if(this.messageForm.question ==""){
              document.getElementById("questionQErrors").innerText ="حقل الاستفسار مطلوب ";
            flag = true;
        }

     
        if(!flag){
      let request = await axios.post(
        "https://icom-agency.com/api/add-question",
        this.messageForm
      );
      // let result = request.data;
        // console.log("fake  ",request);
        // console.log("fake  ",result);
        // console.log("result.status  ",result.status);

      if (request.status == 200 || request.status == 204) {
          document.getElementById("successQ").innerText = 'تم إرسال إستفسارك بنجاح';
      setTimeout(()=>{document.location.href="/";},3000);
         

      }}
    },
  },
};
</script>

<style lang="scss">
h6{
      margin-top: 0px !important;
    margin-bottom: 0px !important;
}

footer {
  padding: 40px 6vw;
  color: white;
  background: linear-gradient(
    220.1deg,
    rgba(32, 23, 72, 1) 0%,
    rgba(75, 43, 132, 1) 100%
  );
  .MPOPPUP {
    z-index: 9;
    dialog {
      * {
        display: block;
      }
      text-align: center;
      position: relative;
      background-image: none;
      background-color: $color_main;
      padding: 40px 20px;
      .close {
        position: absolute;
      }
      form {
        width: fit-content;
        margin: 0 auto;
        input,
        textarea {
          display: inline-block;
          margin: 10px auto;
        }
        .MBUTTON {
          background: $color_accent;
          color: $color_onAccent;
          width: 100%;
        }
      }
    }
  }
  .MBUTTON {
    background: none;
    margin: 0;
  }
  .rights {
    direction: ltr;
    margin-top: 20px;
    padding-top: 20px;
    font-size: 0.8em;
    text-align: left;
    border-top: 2px solid rgba(255, 255, 255, 0.6);
  }
  .conatiner {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: stretch;
    margin: 0 auto;
    gap: 40px;
    div {
      text-align: right;
      p {
        max-width: 400px;
        overflow: hidden;
      }
      a {
        display: block;
        width: fit-content;
        margin-top: 20px;
        padding: 4px 10px;
        border: 2px solid var(--accent);
        border-radius: 40px;
      }
      span {
        margin: 8px 0;
        font-weight: bold;
        color: var(--accent);
        display: block;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: right;
      li {
        margin: 8px 0;
        &:first-of-type {
          font-weight: bold;
          color: var(--accent);
        }
        .MBUTTON {
          background: none;
          margin: 0;
          padding: 0;
          &:hover {
            transform: none;
            background: none;
          }
        }
      }
      &.contact {
        li {
          a {
            margin: 0 10px;
            direction: ltr;
          }
          i {
            margin: 0;
            width: 20px;
          }
        }
      }
    }
  }
}
</style>
