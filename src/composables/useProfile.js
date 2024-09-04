import { ref } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faGlobe, faGraduationCap, faRss, faPhone, faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faUsers, faGlobe, faGraduationCap, faGithub, faRss, faPhone, faEnvelope, faFilePdf)

const gitLink = 'https://github.com/dongkyukim1'
const blogLink = 'https://begin-developer.tistory.com/'
const resumeLink = '/resume/김동규_이력서.pdf'
const email = 'wlsntus55@gmail.com'

const experience = ref([
    { id: 1, title: '태흥 엔지니어링 해외 출장 담당자  ', period: '2022.12 ~ 2023.06' },
    { id: 2, title: '한정판 브랜드 스마트스토어 운영  ', period: '2017.03 ~ 2022.12' },
    { id: 3, title: '초4~고3 영어강사  ', period: '2016.06 ~ 2017.02' },
])

const education = ref([
    { id: 1, title: 'University of Mississippi 경영학과 이수  ', period: '2016.07' },
    { id: 2, title: '건국대학교 영어학과 : 경영학과 졸업  ', period: '2017.04' },
    { id: 3, title: '소프트웨어인재 개발원 개발자 과정 이수  ', period: '2024.03 ~ 2024.08' },
    { id: 4, title: '정보처리기사 필기 획득  ', period: '2024.05' },
    { id: 5, title: 'SQLD 취득  ', period: '2024.06' },
])

const highlights = ref([
    { id: 1, icon: 'users', title: '프로젝트 리더십', description: '3번의 프로젝트 조장 경험' },
    { id: 2, icon: 'globe', title: '글로벌 역량', description: '해외 교환학생 & 미국 출장관리자 ' },
    { id: 3, icon: 'graduation-cap', title: '지속적 성장', description: '최근 자격증 취득 및 교육 이수' },
])

const skillCategories = ref([
    {
        name: '언어',
        skills: [
            { name: 'Java' },
            { name: 'Python' },
            { name: 'JavaScript' },
        ]
    },
    {
        name: '프레임워크 & 라이브러리',
        skills: [
            {name: 'Spring'},
            {name: 'SpringBoot'},
            {name: 'React'},
            {name: 'Vue.js'},
            {name: 'jQuery'},
        ]
    },
    {
        name: '웹 기술',
        skills: [
            {name: 'HTML'},
            {name: 'CSS'},
            {name: 'Thymeleaf'},
            {name: 'JSP'},
            {name: 'BootStrap'}
        ]
    },
    {
        name: 'DB',
        skills: [
            {name: 'Oracle'},
            {name: 'MySQL'},
            {name: 'MongoDB'},
        ]
    },
    {
        name: '협업 도구',
        skills: [
            {name: 'Git'},
            {name: 'Notion'},
        ]
    },
    {
        name: '배포 & 서버',
        skills: [
            {name: 'Docker'},
            {name: 'Kubernetes'},
            {name: 'AWS'},
            {name: 'Node.js'},
            {name: 'Tomcat'}
        ]
    }
])

const getSkillIcon = (skillName) => {
    const specialCases = {
        'Node.js': 'node.js',
        'Vue.js': 'vue.js',
        'jQuery': 'jquery',
        'BootStrap': 'bootstrap',
    };
    const formattedName = specialCases[skillName] || skillName.toLowerCase().replace(/\s+/g, '-');
    try {
        return new URL(`../components/icons/${formattedName}.svg`, import.meta.url).href;
    } catch (error) {
        console.warn(`Icon not found for ${skillName}. Using default icon.`);
        return new URL('../components/icons/default.svg', import.meta.url).href;
    }
}