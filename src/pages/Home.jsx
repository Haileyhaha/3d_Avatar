import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model_ani from '../components/Model_ani';
import { skills, experiences } from '../constans';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';
import 'animate.css';
import { computer } from '../assets/icons';

const Home = () => {
  return (
    <div className="max-container">
      {/* 상단 섹션 */}
      <section className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Section */}
        <div style={{ flex: 1.5 }}>
          <h1 className="head-text mt-20 animate__animated animate__jackInTheBox">
            안녕하세요!
            <br />
         
            <span className="blue-gradient_text font-semibold drop-shadow">서혜인</span>입니다.
          </h1>
          <div className="mt-5 flex flex-col gap-3 text-slate-500 ">
            <p className='animate__animated animate__lightSpeedInLeft'>지속적으로 성장하고 배움을 즐거워하는 저는, 이런 기술들을 가지고 있습니다.</p>
          </div>
          {/* My Skills 섹션 */}
          <div className="flex-1 mt-10">
            <h3 className="subhead-text">My Skills</h3>
            
            <div className="mt-10 flex flex-wrap gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="block-container w-14 h-14 flex flex-col items-center">
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex flex-col justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                  <p className="text-[10px] leading-tight text-center break-words z-10 mt-1">
                    {skill.name}
                  </p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section (Canvas) */}
        <div style={{ flex: 0.5 }} className="mt-10">
          <Canvas
            camera={{ position: [3, 0, 15], fov: 8 }}
            style={{
              width: '100%',
              height: '500px',
            }}
          >
            <ambientLight intensity={2.5} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.8} />
            <Model_ani position={[0.025, -0.9, 0]} />
            <OrbitControls />
          </Canvas>
        </div>
      </section>
      {/* 입사 후 포부 섹션 */}
      <section className="py-16">
        <h3 className="subhead-text">입사 후 포부</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            입사 후, 저는 회사의 비전과 목표에 부합하는 지속적인 기술 혁신에 기여하고자 합니다.
            특히, 최신 기술 트렌드를 꾸준히 학습하고 이를 실무에 적용하여 효율적이고 창의적인
            솔루션을 제시할 것입니다. 제가 이전 직장에서 쌓은 협업과 문제 해결 능력을 바탕으로,
            팀 내에서 원활한 커뮤니케이션을 통해 프로젝트를 성공적으로 이끌어 나가겠습니다.
            자기계발을 즐기며, 새로운 지식을 습득하고 기술적 역량을 확장하는 것을 중요시합니다.
            이러한 태도를 바탕으로, 새로운 도전 과제와 기술적 발전을 통해 개인적인 성장을 이룰
            뿐만 아니라, 회사의 발전에도 기여할 것입니다. 매일매일 진화하는 개발자로서의
            성과를 통해 회사와 함께 성장하며, 실질적인 가치를 창출하는 데 최선을 다하겠습니다.
          </p>
        </div>
        
        <div className="mt-20 flex flex-col gap-3">
          <h3 className="subhead-text">팀 프로젝트 시연 영상</h3>
          <div className="relative mt-2 w-full max-w-[1120px] mx-auto">
            {/* 모니터 이미지 */}
            <img
              src={computer}
              alt="Monitor Background"
              className="w-full h-auto object-contain"
            />
            {/* YouTube 영상 */}
            <div
              className="
                absolute 
                top-[3%] left-[2%] 
                w-[96%] h-[83%]
              "
            >
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/pFwExjzInms"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
        </div>  
        </div>
        {/* 타임라인 */}
        <div className="mt-24 flex">
          <VerticalTimeline className="before:bg-timeline-line" >
            {experiences.map((experience,index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  backgroundColor: '#fafafa', 
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                }}
                intersectionObserverProps={{
                  rootMargin: '0px 0px -20% 0px', // 뷰포트 하단에서 20% 미리 감지
                  triggerOnce: false, // 반복 트리거 활성화
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </section>

      {/* CTA */}
      <hr className="border-slate-300" />
      <CTA />
    </div>
  );
};

export default Home;