import TrueFocus from "../components/ui/true-focus";
import SpotlightCard from "../components/ui/spotlight-card";
import htmlImage from "../Images/html.svg";
import cssImage from "../Images/css.svg";
import jsImage from "../Images/javascript.svg";
import jqueryImage from "../Images/jquery.svg";
import reactImage from "../Images/reactjs.svg";
import nodeImage from "../Images/node.svg";
import expressImage from "../Images/express.svg";
import mongodbImage from "../Images/mongodb.svg";
import githubImage from "../Images/github.svg";
import dockerImage from "../Images/docker.svg";
import nextImage from "../Images/nextjs.svg";
import redisImage from "../Images/redis.svg";
import reduxImage from "../Images/redux.svg";
import typescriptImage from "../Images/typescript.svg";
import mui from "../Images/mui.svg";
import tailwindImage from "../Images/tailwind.svg";
import bootstrapImage from "../Images/bootstrap.svg";
import jsonwebToken from "../Images/jsonwebtoken.svg";
import firebase from "../Images/firebase.svg";
import awsImage from "../Images/aws.svg";
import reactNative from "../Images/react-native.png";
import Image from "next/image";

export default function Skiils() {
  return (
    <>
      <div className="min-h-screen bg-black py-3">
        <TrueFocus
          sentence="Skills might you Looking for"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
        <div className="container mx-auto mt-8 px-2 pb-8 lg:px-0">
          <div className="grid grid-cols-3 lg:grid-cols-7 gap-3">
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={htmlImage} alt="HTML" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={cssImage} alt="CSS" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={jsImage} alt="JAVASCRIPT" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={bootstrapImage} alt="BOOTSTRAP" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={tailwindImage} alt="TAILWIND" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={jqueryImage} alt="JQUERY" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={reactImage} alt="REACTJS" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={reactNative} alt="react native" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={mui} alt="MUI" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={dockerImage} alt="Docker" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={githubImage} alt="Github" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={nextImage} alt="Nextjs" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={reduxImage} alt="Redux" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={redisImage} alt="Redis" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image
                src={typescriptImage}
                alt="Typescript"
                className="mx-auto"
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={nodeImage} alt="Nodejs" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={expressImage} alt="Expressjs" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={mongodbImage} alt="Mongodb" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={firebase} alt="firebase" className="mx-auto" />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image
                src={jsonwebToken}
                alt="jsonwebToken"
                className="mx-auto"
              />
            </SpotlightCard>
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              <Image src={awsImage} alt="awsImage" className="mx-auto" />
            </SpotlightCard>
          </div>
        </div>
      </div>
    </>
  );
}
