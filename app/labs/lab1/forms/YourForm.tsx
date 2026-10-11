export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h5>Student Profile Form</h5>

      <label htmlFor="wd-first-name">First Name:</label>
      <input type="text" id="wd-first-name" defaultValue="Gautam" /> <br />

      <label htmlFor="wd-last-name">Last Name:</label>
      <input type="text" id="wd-last-name" defaultValue="Mahajan" /> <br />

      <label htmlFor="wd-username">Username:</label>
      <input type="text" id="wd-username" defaultValue="GautamM86" /> <br />

      <label htmlFor="wd-password">Password:</label>
      <input type="password" id="wd-password" defaultValue="securepassword123" /> <br />

      <label htmlFor="wd-bio">Biography:</label>
      <br />
      <textarea
        id="wd-bio"
        cols={30}
        rows={5}
        defaultValue="Computer Science student with an interest in algorithm optimization, 2D matrix prefix sums in Python, and building modular functions."
      />
      <br />

      <label>Class standing:</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-radio-freshman" />
      <label htmlFor="wd-radio-freshman">Freshman</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-radio-sophomore" />
      <label htmlFor="wd-radio-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-radio-junior" />
      <label htmlFor="wd-radio-junior">Junior</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-radio-senior" />
      <label htmlFor="wd-radio-senior">Senior</label>
      <br />
      <input type="radio" name="radio-standing" id="wd-radio-graduate" defaultChecked />
      <label htmlFor="wd-radio-graduate">Graduate</label>
      <br />

      <label>Enrollment:</label>
      <br />
      <input type="radio" name="radio-enrollment" id="wd-radio-full-time" defaultChecked />
      <label htmlFor="wd-radio-full-time">Full-time</label>
      <br />
      <input type="radio" name="radio-enrollment" id="wd-radio-part-time" />
      <label htmlFor="wd-radio-part-time">Part-time</label>
      <br />

      <label>Favorite Language:</label>
      <br />
      <input type="radio" name="radio-lang" id="wd-radio-python" defaultChecked />
      <label htmlFor="wd-radio-python">Python</label>
      <br />
      <input type="radio" name="radio-lang" id="wd-radio-ts" />
      <label htmlFor="wd-radio-ts">TypeScript</label>
      <br />

      <label>Interests:</label>
      <br />
      <input type="checkbox" name="check-interest" id="wd-chkbox-algo" defaultChecked />
      <label htmlFor="wd-chkbox-algo">Algorithms</label>
      <br />
      <input type="checkbox" name="check-interest" id="wd-chkbox-web" defaultChecked />
      <label htmlFor="wd-chkbox-web">Web Development</label>
      <br />
      <input type="checkbox" name="check-interest" id="wd-chkbox-ml" defaultChecked />
      <label htmlFor="wd-chkbox-ml">Machine Learning</label>
      <br />

      <label htmlFor="wd-major">Major:</label>
      <select id="wd-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
      </select>
      <br />

      <label htmlFor="wd-topics">Topics to deepen this term:</label>
      <br />
      <select multiple id="wd-topics" defaultValue={["REACT", "AGENTIC_AI"]}>
        <option value="REACT">React</option>
        <option value="NODE">Node</option>
        <option value="HCI">Human Computer Interaction</option>
        <option value="AGENTIC_AI">Agentic AI</option>
      </select>
      <br />

      <label htmlFor="wd-role">Primary Role:</label>
      <select id="wd-role" defaultValue="STUDENT">
        <option value="STUDENT">Student</option>
        <option value="DEVELOPER">Developer</option>
      </select>
      <br />

      <label htmlFor="wd-school-email">School email:</label>
      <input
        type="email"
        id="wd-school-email"
        defaultValue="mahajan.gaut@northeastern.edu"
      />
      <br />

      <label htmlFor="wd-grad-year">Expected graduation year:</label>
      <input
        type="number"
        id="wd-grad-year"
        defaultValue={2026}
        min={2024}
        max={2030}
      />
      <br />

      <label htmlFor="wd-program-start">Program start date:</label>
      <input type="date" id="wd-program-start" defaultValue="2025-01-06" />
      <br />

      <label htmlFor="wd-excitement">Excitement about the course (0–10):</label>
      <input
        type="range"
        id="wd-excitement"
        min={0}
        max={10}
        defaultValue={10}
      />
      <br />
      <br />

      <button id="wd-save" type="submit">Save</button>
      <button id="wd-cancel" type="button">Cancel</button>
    </form>
  );
}