"use client";
import TechInfo from "./components/tech_info";
import { useTheme } from "../providers/theme_provider";

export default function StackPage() {
  const { theme } = useTheme();
  return (
    <div>
      <h1 className="text-2xl">Stack</h1>
      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-black'}`}>
        the technologies I use, like, and rely on to create
      </p>
      <div className="mt-6 pop-out gap-4">
        <h2 className="color-white text-sm font-medium mb-4">Frontend:</h2>
        <div className="flex items-center justify-start flex-wrap gap-12">
          <div className="tech-item-slide">
            <TechInfo name="React" link="https://react.dev/" image="/stack/react.svg" />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Next.js"
              link="https://nextjs.org/"
              image={theme === 'dark' ? "/stack/nextjs_dark.svg" : "/stack/nextjs_light.svg"}
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Flutter"
              link="https://flutter.dev/"
              image="/stack/flutter.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Tailwind CSS"
              link="https://tailwindcss.com/"
              image="/stack/tailwind.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Material UI"
              link="https://mui.com/"
              image="/stack/material_ui.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Redux"
              link="https://redux.js.org/"
              image="/stack/redux.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="TypeScript"
              link="https://www.typescriptlang.org/"
              image="/stack/typescript.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="JavaScript"
              link="https://www.javascript.com/"
              image="/stack/javascript.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo name="Dart" link="https://dart.dev/" image="/stack/dart.svg" />
          </div>
        </div>
      </div>
      <div className="mt-12 pop-out gap-4">
        <h2 className="color-white text-sm font-medium mb-4">Backend:</h2>
        <div className="flex items-center justify-start flex-wrap gap-12">
          <div className="tech-item-slide">
            <TechInfo
              name="Node.js"
              link="https://nodejs.org/"
              image="/stack/nodejs.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Express"
              link="https://expressjs.com/"
              image={theme === 'dark' ? "/stack/express_dark.svg" : "/stack/express_light.svg"}
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="NestJS"
              link="https://nestjs.com/"
              image="/stack/nestjs.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="PostgreSQL"
              link="https://www.postgresql.org/"
              image="/stack/postgres.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="MySQL"
              link="https://www.mysql.com/"
              image="/stack/my_sql.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Sequelize"
              link="https://sequelize.org/"
              image="/stack/sequelize.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="MongoDB"
              link="https://www.mongodb.com/"
              image="/stack/mongo_db.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Mongoose"
              link="https://mongoosejs.com/"
              image="/stack/mongoose_js.svg"
            />
          </div>
        </div>
      </div>
      <div className="mt-12 pop-out gap-4">
        <h2 className="color-white text-sm font-medium mb-4">Tools & extras:</h2>
        <div className="flex items-center justify-start flex-wrap gap-12">
          <div className="tech-item-slide">
            <TechInfo
              name="VS Code"
              link="https://code.visualstudio.com/"
              image="/stack/vs_code.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Xcode"
              link="https://developer.apple.com/xcode/"
              image="/stack/xcode.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Android Studio"
              link="https://developer.android.com/studio/"
              image="/stack/android_studio.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="GitHub"
              link="https://github.com/"
              image={theme === 'dark' ? "/stack/github_dark.svg" : "/stack/github_light.svg"}
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="NPM"
              link="https://www.npmjs.com/"
              image="/stack/npm.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="DBeaver"
              link="https://dbeaver.io/"
              image="/stack/dbeaver.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Postman"
              link="https://www.postman.com/"
              image="/stack/postman.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Firebase"
              link="https://firebase.google.com/"
              image="/stack/firebase.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="JSON"
              link="https://www.json.org/"
              image="/stack/json.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Swagger"
              link="https://swagger.io/"
              image="/stack/swagger.svg"
            />
          </div>
          <div className="tech-item-slide">
            <TechInfo
              name="Vercel"
              link="https://vercel.com/"
              image={theme === 'dark' ? "/stack/vercel_dark.svg" : "/stack/vercel_light.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
