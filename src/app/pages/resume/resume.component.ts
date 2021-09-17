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
      "C#",
      "icon-c.svg"
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
      "Java",
      "icon-java.svg"
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
      "ASP.NET Core",
      "icon-asp.svg"
    ),
    new SkillItem(
      "EF Core",
      "icon-asp.svg"
    ),
    new SkillItem(
      "Angular",
      "icon-angular.svg"
    ),
    new SkillItem(
      "Node.js",
      "icon-node.svg"
    ),
    new SkillItem(
      "Spring",
      "icon-spring.svg"
    ),
    // new SkillItem(
    //   "Hibernate",
    //   "icon-ibernate.png"
    // ),
    // new SkillItem(
    //   "React.js",
    //   "icon-react.svg"
    // ),
    new SkillItem(
      "Bootstrap",
      "icon-bootstrap.svg"
    ),
    new SkillItem(
      "Flutter",
      "icon-flutter.svg"
    ),
    // new SkillItem(
    //   "OpenCL",
    //   "icon-opencl.png"
    // ),
    new SkillItem(
      "Ruby on Rails",
      "icon-rubyonrails.svg"
    ),
    // new SkillItem(
    //   "Express",
    //   "icon-express.png"
    // ),
  ]
  other_skills: SkillItem[] = [
    // new SkillItem(
    //   "Algorithms, Data Structures",
    //   "icon_rubik.svg"
    // ),
    // new SkillItem(
    //   "Cloud computing (Microsoft Azure)",
    //   "icon-microsoft.svg"
    // ),
    new SkillItem(
      "Full Stack development, HTML, CSS, jQuery, REST, SOAP APIs, Swagger documentation, Postman",
      "icon-web.svg"
    ),
    new SkillItem(
      "Microsoft SQL Server, MySQL, PostgreSQL, MongoDB, Firebase",
      "icon-db.svg"
    ),
    // new SkillItem(
    //   "Mobile Application development (Native iOS/Android, Flutter)",
    //   "icon-app_symbol.svg"
    // ),
    new SkillItem(
      "Agile (Scrum) methodologies, Git, DevOps, CI/CD, Microservices, Object-Oriented Programming",
      "icon-circular_arrows.svg"
    ),
    // new SkillItem(
    //   "REST, SOAP APIs, Swagger documentation, Postman",
    //   "icon-rest_api.svg"
    // ),
    // new SkillItem(
    //   "Model View Controller design pattern",
    //   "icon-patterns.svg"
    // ),
    // new SkillItem(
    //   "Object-Oriented Programming",
    //   "icon_oop.svg"
    // ),
    // new SkillItem(
    //   "LaTeX, Entity-Relationship (ER), Unified Modeling Language (UML), XML",
    //   "icon-oop.svg"
    // ),
    // new SkillItem(
    //   "Network administration (Cisco Packet Tracer, Wireshark)",
    //   "icon-ethernet.svg"
    // ),
    new SkillItem(
      "Adobe Experience Cloud, Google Marketing Platform, Tealium",
      "icon-analytics.png"
    ),
    new SkillItem(
      "Business Process Management, Robotic Process Automation, Process Mining, Process Discovery",
      "icon-robot.svg"
    ),
    // new SkillItem(
    //   "IntelliJ IDEA, WebStorm, PyCharm, Visual Studio Code, Eclipse, NetBeans, Android Studio, XCode",
    //   "icon-intellij_idea.svg"
    // ),
    new SkillItem(
      "Cloud computing (Microsoft Azure), Virtual Machines, Docker, Maven, Firebase, Pandas, LaTeX",
      "icon-more.svg"
    ),

  ];
  resumeItems: ResumeItem[] = [
    new ResumeItem(
      "Google Analytics",
      "Google",
      "Sep 2021",
      "https://skillshop.exceedlms.com/student/award/mj3Yw4XsxVJ3oD1ybHzwdCMm",
      "89604662",
      "icon-google.svg",
      false),
    new ResumeItem(
      "Microsoft Certified: Azure fundamentals",
      "Microsoft",
      "Mar 2021",
      "https://www.youracclaim.com/badges/5e71870d-f59d-4b04-be1e-4512ec12ed83?source=linked_in_profile",
      "",
      "icon-microsoft.svg",
      false),
    new ResumeItem(
      "REST API",
      "HackerRank",
      "Jul 2020",
      "https://www.hackerrank.com/certificates/579ba2349a33",
      "579BA2349A33",
      "icon-hackerrank.svg",
      true),
    new ResumeItem(
      "Git Intermediate Techniques",
      "LinkedIn",
      "Aug 2020",
      "/assets/documents/certificates/Git_Intermediate_Techniques.pdf",
      "",
      "icon-linkedin_light.svg",
      true),
    new ResumeItem(
      "Advanced Java Programming",
      "LinkedIn",
      "Aug 2020",
      "/assets/documents/certificates/Advanced_Java_Programming.pdf",
      "",
      "icon-linkedin_light.svg",
      true),
    new ResumeItem(
      "Building Full-Stack Apps with React and Spring",
      "LinkedIn",
      "Aug 2020",
      "/assets/documents/certificates/Building_Full-Stack_Apps_with_React_and_Spring.pdf",
      "",
      "icon-linkedin_light.svg",
      true),
    new ResumeItem(
      "Ethical Hacking with JavaScript",
      "LinkedIn",
      "Aug 2020",
      "/assets/documents/certificates/Ethical_Hacking_with_JavaScript.pdf",
      "",
      "icon-linkedin_light.svg",
      true),
    new ResumeItem(
      "Fondamenti di Marketing Digitale",
      "Google Digital Technologies",
      "Jan 2020",
      "/assets/documents/certificates/fundamentals_of_digital_marketing.pdf",
      "XG7 Q85 4C7",
      "icon-google_light.svg",
      false),
    new ResumeItem(
      "EF Standard English Test – CEFR Level C2",
      "EF Standard English Test",
      "Jun 2019",
      "https://www.efset.org/cert/hrVnQr",
      "hrVnQr",
      "icon-language_light.svg",
      false),
    new ResumeItem(
      "Cambridge C1 Advanced – CEFR Level C1",
      "Cambridge School of English",
      "Jun 2015",
      "",
      "",
      "icon-language_light.svg",
      false),
    // new ResumeItem(
    //   "Duolingo English Test",
    //   "Duolingo",
    //   "Jul 2014",
    //   "https://certs.duolingo.com/c3gdg6qp",
    //   "c3gdg6qp",
    //   "icon-language_light.svg"),
    new ResumeItem(
      "European Computer Driving Licence",
      "AICA - Associazione Italiana per l'Informatica ed il Calcolo Automatico",
      "Jun 2013",
      "",
      "",
      "icon-computer_light.svg",
      true),
    new ResumeItem(
      "DELF - A2",
      "Conseil International d'Études Francophones (CIEF)",
      "Jul 2011",
      "",
      "",
      "icon-language_light.svg",
      true),
  ];

  resumeItemsVisible: ResumeItem[];
  resumeItemsHidden: ResumeItem[];

  constructor(private elementRef: ElementRef,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.resumeItemsVisible = this.resumeItems.filter(x => x.hidden === false);
    this.resumeItemsHidden = this.resumeItems.filter(x => x.hidden === true);
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
