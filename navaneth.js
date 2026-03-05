const input = document.getElementById("commandInput");
const content = document.getElementById("terminal-content");

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    let command = input.value.toLowerCase();
    content.innerHTML += `<p>>>> ${command}</p>`;
    
    if (command === "help") {
      content.innerHTML += `
      <p>Available Commands:</p>
      <p>->about - About Me</p>
      <p>->skills - My Skills</p>
      <p>->projects - My Projects</p>
      <p>->achievements - My Achievements<\p>
      <p>->leetcode - Leetcode Profile URL</p> 
      <p>->contact - Contact Info</p>
      

      `;
    }
    else if (command === "about") {
      content.innerHTML += `<p>->Name: Navaneth.S.V</p>
                            <p>->Role: Undergraduate Student</p>
                            <p>->Institution: Sri Eshwar College of Engineering</p>
                            <p>->Status: Online</p>
                            <p>->Core Interest: Passionate about problem-solving and building efficient solutions using C++ and Python.</p>
                            <p style="margin-left: 125px;">Deeply interested in software development and continuously improving through real-world projects and competitive coding.</p>
                            <p>->Mission: I strive to grow into a skilled software developer by building efficient, impactful solutions and continuously improving my technical expertise.</p>`;
    }
    else if (command === "skills") {
      content.innerHTML += `<p>->💻 Programming Languages: Python, C, C++</p>
                            <p>->🧩 Core Software Engineering: Data Structures & Algorithms, Object Oriented Programming, Problem Solving</p>
                            <p>->🌿 Tools: Git,VS Code</p>
                            <p>->🗄️ Database: MySQL</p>
                            <p>->💻 Competitive coding: LeetCode`;
    }
    else if (command === "projects") {
      content.innerHTML += `<p>->1. 🍔Food Mate</p><p style="margin-left: 25px;">Developed a food ordering system with structured data handling.</p>
                            <p style="margin-left: 25px;">Implemented user interaction and file management logic.</p>
                            <p>->2. 🏥Hostpital Mangement Using C</p><p class="indent">Built a system to record and manage patient details.</p>
                            <p class="indent">Implemented fever detection logic and file storage.</p>
                            <p>3.🩺Patient Temperature Management System:</p>
                            <p class="indent">Patient Temperature System in Python Tkinter for entering and storing patient temperatures.</p>
                            <p class="indent">Detects fevers, sorts temperatures, and generates reports efficiently</p>`;
    }
    else if (command === "achievements") {
      content.innerHTML += `<p>->🥇 1st Place – Kanam’26 CodeRush Coding Competition</p>
                            <p>->🚀 Qualified for Grand Finals in CODEWAR-3.0 competition.</p>`;
    }
    else if (command === "leetcode") {
      content.innerHTML += `<p>->🧠Solved 100+ Leetcode Problems</p><p>->🧑‍💻Leetcode Profile URL : <a href="https://leetcode.com/u/navanethsvyn/">https://leetcode.com/u/navanethsvyn/</p>`;
    }
    else if (command === "contact") {
      content.innerHTML += `<p>->📩Email: navanethsvyn@email.com</p><p>->📞Phone Number : +919047345811</p>
                            <p>->🔗LinkedIn : <a href="https://www.linkedin.com/in/navaneth-s-v-5182a036b/">https://www.linkedin.com/in/navaneth-s-v-5182a036b/</a></p>
                            <p>->🐙Github : <a href="https://github.com/navanethsv-3012">https://github.com/navanethsv-3012</a></p>
      `;
    }
    else {
      content.innerHTML += `<p>Command not found. Type 'help'</p>`;
    }
    
    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }

});
