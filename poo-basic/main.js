class Comment {
  constructor({
    content,
    studentName,
    studentRole = "estudiantes",
  }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(`${this.studentName} (${this.studentRole}) \n ${this.likes} likes \n
     ${this.content}`);
  }
}


function videoPlay(id) {
    const urlSecreta = "https://platziclases/" + id;
    console.log(`Se esta reproduciendo desde la url: ${urlSecreta}`);
}

function videoStop(id) {
    const urlSecreta = "https://platziclases/" + id;
    console.log(`Pausamos la url: ${urlSecreta}`);
}

class PlatziClass {
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videID = videoID;
    }

    reproducir() {
        videoPlay(this.videID);
    }

    pausar() {
        videoStop(this.videID);
    }
}

class Course {
  constructor({
    name,
    classes = [],
    isFree = false,
    lang = "spanish"
  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito; 
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  isFree: true
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
  lang: "english"
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
});


class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness",
    "Curso Dataviz",
  ],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal",
  ],
})

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });

    comment.publicar();
  }
}

class FreeStudent extends Student { 
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approveCourse.push(newCourse);
    } else {
      console.warn(`Lo siento ${this.name} no puedes tomar este curso`);
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approveCourse.push(newCourse);
    } else {
      console.warn(`Lo siento ${this.name} no puedes tomar cursos en ingles`);
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approveCourse.push(newCourse);
  }
}

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approveCourse.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor"
    });

    comment.publicar();
  }
}



const juan2 = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new BasicStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});

const freddy = new TeacherStudent({
  name: "Freddy Vega",
  username: "freddier",
  email: "freddy@juanito.com",
  instagram: "freddy_vega",
});