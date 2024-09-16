import image1 from '../../../assets/dbvmk0tsk0o0hd59fi64z3own.png';
import image2 from '../../../assets/2r8kd5zqpi905lkzsshdlvvn5.png';
import image3 from '../../../assets/ann24vsq7r0ux3vipqa1n90gg.png';

export const HomeFeatures = () => {
  return (
    <div style={{ height: '60dvh', backgroundColor: '#f2f2f0' }}>
      <ul
        className=" d-flex align-items-center column-gap-4 overflow-scroll"
        style={{ scrollbarWidth: 'none' }}
      >
        <li className=" d-flex flex-column gap-2">
          <img
            src={image1}
            alt=""
            width={300}
          />
          <h1 style={{ color: '#b14020', fontSize: '1.3rem' }}>
            Let the right people know you’re open to work
          </h1>
          <p>
            With the Open To Work feature, you can privately tell recruiters or
            publicly share with the LinkedIn community that you are looking for
            new job opportunities.
          </p>
        </li>
        <li className=" d-flex flex-column gap-2">
          <img
            src={image2}
            alt=""
            width={300}
          />
          <h1 style={{ color: '#b14020', fontSize: '1.3rem' }}>
            Conversations today could lead to opportunity tomorrow
          </h1>
          <p>
            Sending messages to people you know is a great way to strengthen
            relationships as you take the next step in your career.
          </p>
        </li>
        <li className=" d-flex flex-column gap-2">
          <img
            src={image3}
            alt=""
            width={300}
          />
          <h1 style={{ color: '#b14020', fontSize: '1.3rem' }}></h1>
          <p>
            From live videos, to stories, to newsletters and more, LinkedIn is
            full of ways to stay up to date on the latest discussions in your
            industry.
          </p>
        </li>
      </ul>
    </div>
  );
};
