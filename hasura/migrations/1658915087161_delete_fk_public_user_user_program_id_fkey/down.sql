alter table "public"."user"
  add constraint "user_program_id_fkey"
  foreign key ("program_id")
  references "public"."topic_industry"
  ("id") on update restrict on delete restrict;
