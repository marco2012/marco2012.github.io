import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import {ResumeItem, SkillItem} from "../../models/resumeItem.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit, AfterViewInit, OnDestroy {

  programmingLanguages: SkillItem[] = [
    new SkillItem(
      "Python",
      "icon-python.svg"
    ),
    new SkillItem(
      "Java",
      "icon-java.svg"
    ),
    new SkillItem(
      "JavaScript",
      "icon-javascript.svg"
    ),
    new SkillItem(
      "TypeScript",
      "icon-typescript.svg"
    ),
    new SkillItem(
      "SQL",
      "icon-mysql.svg"
    ),
    new SkillItem(
      "Swift",
      "icon-swift.svg"
    ),
    new SkillItem(
      "C",
      "icon-c.svg"
    ),
    new SkillItem(
      "C++",
      "icon-cplusplus.svg"
    ),
    new SkillItem(
      "Scala",
      "icon-scala.svg"
    ),
    new SkillItem(
      "Ruby",
      "icon-ruby.svg"
    ),
    new SkillItem(
      "Assembly",
      "icon-assembly.svg"
    ),
    new SkillItem(
      "AppleScript",
      "icon-apple.svg"
    ),
  ]
  frameworks: SkillItem[] = [
    new SkillItem(
      "Spring",
      "icon-spring.svg"
    ),
    new SkillItem(
      "Hibernate",
      "icon-ibernate.png"
    ),
    new SkillItem(
      "Node.js",
      "icon-node.svg"
    ),
    new SkillItem(
      "Angular",
      "icon-angular.svg"
    ),
    new SkillItem(
      "React.js",
      "icon-react.svg"
    ),
    new SkillItem(
      "Flutter",
      "icon-flutter.svg"
    ),
    new SkillItem(
      "Bootstrap",
      "icon-bootstrap.svg"
    ),
    new SkillItem(
      "OpenCL",
      "icon-opencl.png"
    ),
    new SkillItem(
      "Ruby on Rails",
      "icon-rubyonrails.svg"
    ),
    new SkillItem(
      "Express",
      "icon-express.png"
    ),
  ]
  other_skills: SkillItem[] = [
    // new SkillItem(
    //   "Algorithms, Data Structures",
    //   "icon_rubik.svg"
    // ),
    new SkillItem(
      "Cloud computing (Amazon Web Services)",
      "icon_aws.svg"
    ),
    new SkillItem(
      "Mobile Application development (Native iOS/Android, React Native, Flutter)",
      "icon-app_symbol.svg"
    ),
    new SkillItem(
      "Database (Oracle, MySQL, PostgreSQL, MongoDB, CouchDB\n)",
      "icon-db.svg"
    ),
    new SkillItem(
      "Full Stack development (Back-end / Front-end), Web Application development (HTML, CSS, Bootstrap, TailWindCSS)",
      "icon-web.svg"
    ),
    new SkillItem(
      "Agile (Scrum), DevOps methodologies",
      "icon-circular_arrows.svg"
    ),
    new SkillItem(
      "REST, SOAP web services",
      "icon-rest_api.svg"
    ),
    new SkillItem(
      "Model View Controller design pattern",
      "icon-patterns.svg"
    ),
    new SkillItem(
      "Object-Oriented Programming",
      "icon_oop.svg"
    ),
    new SkillItem(
      "LaTeX, Entity-Relationship (ER), Unified Modeling Language (UML), XML",
      "icon-oop.svg"
    ),
    new SkillItem(
      "Network administration (Cisco Packet Tracer, Wireshark)",
      "icon-ethernet.svg"
    ),
    new SkillItem(
      "Business Process Management, Robotic Process Automation, Process Mining",
      "icon-robot.svg"
    ),
    new SkillItem(
      "IntelliJ IDEA, WebStorm, PyCharm, Visual Studio Code, Eclipse, NetBeans, Android Studio, XCode",
      "icon-intellij_idea.svg"
    ),
    new SkillItem(
      "Docker, Git, Pandas, Gradle, Maven, Apache, Firebase, Virtual Machines, Adobe Creative Suite",
      "icon-more.svg"
    ),

  ];
  resumeItems: ResumeItem[] = [
    new ResumeItem(
      "Git Intermediate Techniques",
      "LinkedIn",
      "Aug 2020",
      "https://www.dropbox.com/s/gvydwjpdm7pveq5/Git%20Intermediate%20Techniques.pdf?dl=0",
      "",
      "icon-linkedin_light.svg"),
    new ResumeItem(
      "Advanced Java Programming",
      "LinkedIn",
      "Aug 2020",
      "https://www.dropbox.com/s/x6i8b65k4nr5tc3/Advanced%20Java%20Programming.pdf?dl=0",
      "",
      "icon-linkedin_light.svg"),
    new ResumeItem(
      "Building Full-Stack Apps with React and Spring",
      "LinkedIn",
      "Aug 2020",
      "https://www.dropbox.com/s/c8tkvt4tza1eprp/Building%20Full-Stack%20Apps%20with%20React%20and%20Spring.pdf?dl=0",
      "",
      "icon-linkedin_light.svg"),
    new ResumeItem(
      "Ethical Hacking with JavaScript",
      "LinkedIn",
      "Aug 2020",
      "https://www.dropbox.com/s/vbuhdvknu4jgarh/Ethical%20Hacking%20with%20JavaScript.pdf?dl=0",
      "",
      "icon-linkedin_light.svg"),
    new ResumeItem(
      "REST API",
      "HackerRank",
      "Jul 2020",
      "https://www.hackerrank.com/certificates/579ba2349a33",
      "579BA2349A33",
      "icon-hackerrank.svg"),
    new ResumeItem(
      "Fondamenti di Marketing Digitale",
      "Google Digital Technologies",
      "Jan 2020",
      "https://learndigital.withgoogle.com/digitaltraining/validate-certificate-code",
      "XG7 Q85 4C7",
      "icon-google_light.svg"),
    new ResumeItem(
      "EF Standard English Test – CEFR Level C2",
      "EF Standard English Test",
      "Jun 2019",
      "https://www.efset.org/cert/hrVnQr",
      "hrVnQr",
      "icon-language_light.svg"),
    new ResumeItem(
      "Cambridge C1 Advanced – CEFR Level C1",
      "Cambridge School of English",
      "Jun 2015",
      "",
      "",
      "icon-language_light.svg"),
    new ResumeItem(
      "Duolingo English Test",
      "Duolingo",
      "Jul 2014",
      "https://certs.duolingo.com/c3gdg6qp",
      "c3gdg6qp",
      "icon-language_light.svg"),
    new ResumeItem(
      "European Computer Driving Licence",
      "AICA - Associazione Italiana per l'Informatica ed il Calcolo Automatico",
      "Jun 2013",
      "",
      "",
      "icon-computer_light.svg"),
    new ResumeItem(
      "DELF - A2",
      "Conseil International d'Études Francophones (CIEF)",
      "Jul 2011",
      "",
      "",
      "icon-language_light.svg"),
  ];

  constructor(private elementRef: ElementRef,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.querySelector('body').classList.add('resume');
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = '';
    this.route.fragment.subscribe((fragment: string) => {
      if (fragment) {
        setTimeout(() => {
          document.querySelector('#' + fragment).scrollIntoView({behavior: 'smooth'});
        }, 100)
      }
    })
  }

  ngOnDestroy() {
    document.querySelector('body').classList.remove('resume');
  }

}
