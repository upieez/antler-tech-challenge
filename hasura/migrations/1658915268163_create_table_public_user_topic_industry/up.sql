CREATE TABLE "public"."user_topic_industry" ("id" serial NOT NULL, "user_id" integer NOT NULL, "topic_industry_id" integer NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("topic_industry_id") REFERENCES "public"."topic_industry"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("id"));
