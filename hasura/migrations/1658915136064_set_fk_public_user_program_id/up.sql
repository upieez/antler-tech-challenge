alter table "public"."user"
  add constraint "user_program_id_fkey"
  foreign key ("program_id")
  references "public"."program"
  ("id") on update restrict on delete restrict;
