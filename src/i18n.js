import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const currentYear = new Date().getFullYear();
const resources = {
  vi: {
    translation: {
      header: {
        home: "Trang chủ",
        about: "Giới thiệu",
        skills: "Kỹ năng",
        products: "Sản Phẩm",
        certificates: "Chứng chỉ",
        contact: "Liên hệ",
        contactNow: "Liên hệ ngay"
      },
      footer: {
        rights: `© ${currentYear} Portfolio. All rights reserved.`,
        downloadCV: "Tải CV"
      },
      home: {
        ready: "Sẵn sàng cho các thử thách mới",
        hello: "Xin chào, mình là",
        role: "Fresher Frontend Developer",
        desc: "Kiến tạo trải nghiệm người dùng hiện đại thông qua sự tối giản, hiệu suất và những dòng mã tinh tế. Chuyên gia trong việc chuyển đổi ý tưởng thành các ứng dụng web đẳng cấp thế giới.",
        viewProject: "Xem dự án",
        downloadCV: "Tải CV",
        monthsExp: "Tháng kinh nghiệm",
        projectsCompleted: "Dự án hoàn thành",
        coreSkills: "Kỹ năng chính",
        skillsExpertise: "Kỹ năng & Chuyên môn",
        frontendArch: "Frontend Architecture",
        frontendDesc: "Xây dựng các ứng dụng quy mô lớn với React, Vue và các framework hiện đại.",
        manyMore: "Và nhiều công nghệ khác...",
        backendTitle: "Back-End: Php, Php Laravel, Java, Mysql, PostgreSql",
        toolTitle: "Tool: Git, Docker, Ci/Cd, Postman, VSCode, Figma, Claude, Chatgpt, Copilot"
      },
      introduce: {
        creativeDev: "Creative Developer",
        location: "Tp. Hồ Chí Minh, Việt Nam",
        aboutMe: "Về tôi",
        aboutDesc: "Tôi là một kỹ sư phần mềm có kinh nghiệm thực chiến trong việc xây dựng các sản phẩm kỹ thuật số tập trung vào trải nghiệm người dùng và hiệu suất tối ưu.",
        careerJourney: "Hành trình nghề nghiệp",
        internRole: "Thực Tập Sinh - VNPT Hồ Chí Minh",
        internTime: "03/2026 — 06/2026",
        internDesc: "Học hỏi và phát triển frontend cho các dự án thương mại điện tử quy mô lớn, tối ưu hóa tốc độ tải trang lên đến 40%.",
        studentRole: "Sinh viên tại trường Đại Học Công Nghệ Sài Gòn",
        studentTime: "2022 — 2026",
        studentDesc: "Phát triển các giao diện người dùng phức tạp sử dụng React và Tailwind CSS, phối hợp chặt chẽ với team UI/UX Design.",
        learningPassion: "Học tập & Đam mê",
        learningDesc: "Hiện tại đang đang sinh viên năm 4 đang làm khóa luận. Tôi không chỉ viết code, tôi xây dựng giải pháp. Đam mê của tôi nằm ở việc kết hợp giữa tính logic của lập trình và tính thẩm mỹ của thiết kế để tạo ra những sản phẩm không chỉ chạy tốt mà còn phải đẹp.",
        coreValues: "Giá trị cốt lõi",
        coreValuesDesc: "Những nguyên tắc định hình cách tôi làm việc và cống hiến",
        creativity: "Sáng tạo không ngừng",
        creativityDesc: "Luôn tìm kiếm những giải pháp mới mẻ và độc đáo cho các vấn đề kỹ thuật phức tạp.",
        quality: "Chất lượng là ưu tiên",
        qualityDesc: "Cam kết viết code sạch, dễ bảo trì và luôn tuân thủ các tiêu chuẩn bảo mật cao nhất.",
        collaboration: "Hợp tác & Chia sẻ",
        collabDesc: "Tin rằng những sản phẩm vĩ đại nhất luôn được tạo ra từ sức mạnh của sự kết nối và đồng lòng."
      },
      skill: {
        title: "Kỹ năng & Chuyên môn",
        desc: "Tập trung vào việc xây dựng các ứng dụng web hiệu năng cao với trải nghiệm người dùng tối ưu. Dưới đây là bộ kỹ năng tôi đã tích lũy và phát triển trong suốt sự nghiệp.",
        frontend: "Frontend Development",
        tools: "Tools",
        toolsDesc: "Luôn cập nhật những công cụ mới nhất để tối ưu quy trình làm việc.",
        backend: "Backend",
        phpLaravelDesc: "Xây dựng RESTful API và Real-time services.",
        dbDesc: "Thiết kế cấu trúc dữ liệu và tối ưu hóa truy vấn.",
        uiuxDesc: "Tư duy thiết kế lấy người dùng làm trung tâm, tập trung vào tính khả dụng và thẩm mỹ tối giản."
      },
      product: {
        title: "Dự án tiêu biểu",
        desc: "Khám phá những sản phẩm kỹ thuật số được xây dựng với sự tập trung vào hiệu năng và trải nghiệm người dùng.",
        all: "Tất cả",
        webApp: "Web App",
        uiux: "UI/UX Design",
        viewDemo: "Xem Demo",
        github: "Github",
        details: "Chi tiết",
        noProjects: "Không có dự án nào."
      },
      certificate: {
        title: "Chứng chỉ chuyên môn",
        desc: "Tổng hợp các bằng cấp và chứng chỉ từ các tổ chức công nghệ hàng đầu thế giới, minh chứng cho sự nỗ lực và quá trình học tập không ngừng nghỉ.",
        updating: "Đang cập nhật",
        updatingDesc: "Chứng chỉ tiếp theo đang trong quá trình hoàn thiện",
        showBtn: "Xem chứng chỉ"
      },
      contact: {
        contact: "Liên hệ",
        connect: "Kết nối với tôi",
        desc: "Bạn có ý tưởng dự án hoặc muốn hợp tác? Hãy để lại tin nhắn, tôi sẽ phản hồi sớm nhất có thể.",
        fullname: "Họ và tên",
        email: "Địa chỉ Email",
        subject: "Chủ đề",
        message: "Tin nhắn",
        sendMessage: "Gửi tin nhắn",
        placeholderName: "Nguyễn Văn A",
        placeholderEmail: "example@gmail.com",
        placeholderSubject: "Hợp tác dự án",
        placeholderMessage: "Tôi muốn trao đổi về...",
        phone: "Số điện thoại",
        workTime: "Thứ 2 - Thứ 6, 9:00 - 18:00",
        address: "Địa chỉ",
        addressDesc: "C7/19 ấp 4a, xã Bình Hưng, huyện Bình Chánh, Thành phố Hồ Chí Minh",
        social: "Mạng xã hội"
      }
    }
  },
  en: {
    translation: {
      header: {
        home: "Home",
        about: "About",
        skills: "Skills",
        products: "Products",
        certificates: "Certificates",
        contact: "Contact",
        contactNow: "Contact Now"
      },
      footer: {
        rights: "© 2026 Portfolio. All rights reserved.",
        downloadCV: "Download CV"
      },
      home: {
        ready: "Ready for new challenges",
        hello: "Hello, I am",
        role: "Intern Frontend Developer",
        desc: "Crafting modern user experiences through minimalism, performance, and elegant code. Expert in transforming ideas into world-class web applications.",
        viewProject: "View Projects",
        downloadCV: "Download CV",
        monthsExp: "Months Exp",
        projectsCompleted: "Projects Done",
        coreSkills: "Core Skills",
        skillsExpertise: "Skills & Expertise",
        frontendArch: "Frontend Architecture",
        frontendDesc: "Building large-scale applications with React, Vue, and modern frameworks.",
        manyMore: "And many more technologies...",
        backendTitle: "Back-End: Php, Php Laravel, Java, Mysql, PostgreSql",
        toolTitle: "Tool: Git, Docker, CI/CD"
      },
      introduce: {
        creativeDev: "Creative Developer",
        location: "Ho Chi Minh City, Vietnam",
        aboutMe: "About me",
        aboutDesc: "I am a software engineer with practical experience in building digital products focused on optimal user experience and performance.",
        careerJourney: "Career Journey",
        internRole: "Intern - VNPT Ho Chi Minh",
        internTime: "2026 — Present",
        internDesc: "Learning and developing frontend for large-scale e-commerce projects, optimizing page load speed by up to 40%.",
        studentRole: "Student at Saigon Technology University",
        studentTime: "2022 — 2026",
        studentDesc: "Developing complex user interfaces using React and Tailwind CSS, collaborating closely with the UI/UX Design team.",
        learningPassion: "Learning & Passion",
        learningDesc: "Currently a 4th-year student working on my graduation thesis. I don't just write code, I build solutions. My passion lies in combining the logic of programming and the aesthetics of design to create products that not only run well but also look beautiful.",
        coreValues: "Core Values",
        coreValuesDesc: "The principles that shape how I work and contribute",
        creativity: "Relentless Creativity",
        creativityDesc: "Always looking for fresh and unique solutions to complex technical problems.",
        quality: "Quality is Priority",
        qualityDesc: "Committed to writing clean, maintainable code and adhering to the highest security standards.",
        collaboration: "Collaboration & Sharing",
        collabDesc: "Believing that the greatest products are always created from the power of connection and consensus."
      },
      skill: {
        title: "Skills & Expertise",
        desc: "Focusing on building high-performance web applications with optimal user experience. Below is the skill set I have accumulated and developed throughout my career.",
        frontend: "Frontend Development",
        tools: "Tools",
        toolsDesc: "Always keeping up with the latest tools to optimize the workflow.",
        backend: "Backend",
        phpLaravelDesc: "Building RESTful APIs and Real-time services.",
        dbDesc: "Designing data structures and optimizing queries.",
        uiuxDesc: "User-centric design thinking, focusing on usability and minimalist aesthetics."
      },
      product: {
        title: "Featured Projects",
        desc: "Discover digital products built with a focus on performance and user experience.",
        all: "All",
        webApp: "Web App",
        uiux: "UI/UX Design",
        viewDemo: "Live Demo",
        github: "Github",
        details: "Details",
        noProjects: "No projects found."
      },
      certificate: {
        title: "Professional Certificates",
        desc: "A collection of degrees and certificates from top technology organizations in the world, proving the continuous effort and learning process.",
        updating: "Updating",
        updatingDesc: "The next certificate is in the process of completion",
        showBtn: "Show Certificate"
      },
      contact: {
        contact: "Contact",
        connect: "Connect with me",
        desc: "Have a project idea or want to collaborate? Leave a message, I will respond as soon as possible.",
        fullname: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        sendMessage: "Send Message",
        placeholderName: "John Doe",
        placeholderEmail: "example@gmail.com",
        placeholderSubject: "Project Collaboration",
        placeholderMessage: "I would like to discuss about...",
        phone: "Phone Number",
        workTime: "Mon - Fri, 9:00 - 18:00",
        address: "Address",
        addressDesc: "Innovation Building, Quang Trung Software City, District 12, Ho Chi Minh City",
        social: "Social Media"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi', // default language
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    }
  });

  // thêm localStorage
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    i18n.changeLanguage(savedLang);
  }
  

export default i18n;
