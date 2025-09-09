"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, User } from "lucide-react";

type FormData = {
  name: string;
  email?: string;
  phone?: string;
  message: string;
};

const NEXT_PUBLIC_EMAILJS_SERVICE_ID: string = "service_zm4d5bw";
const NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: string = "template_4el317f";
const NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: string = "y4krnBel_UHcMO5sB";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    if (!data.email && !data.phone) {
      setStatus("Please provide either email or phone.");
      return;
    }

    try {
      await emailjs.send(
        NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email || "Not provided",
          from_phone: data.phone || "Not provided",
          message: data.message,
        },
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus("Message sent successfully ✅");
      reset();
    } catch (err) {
      setStatus("Failed to send message ❌");
    }
  };

  return (
    <div className="mt-20 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg"
      >
        <Card className="dark:bg-gray-900 text-card-foreground backdrop-blur-xl border border-border shadow-2xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              Let’s Connect ✨
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3 top-3 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Your Name"
                  className="pl-10"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-muted-foreground h-5 w-5" />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="pl-10"
                  {...register("email")}
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone className="absolute left-3 top-3 text-muted-foreground h-5 w-5" />
                <Input
                  type="tel"
                  placeholder="Your Phone (10 digits)"
                  className="pl-10"
                  {...register("phone", {
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone must be exactly 10 digits",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              {/* Message */}
              <Textarea
                placeholder="Your Message..."
                className="min-h-[120px]"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">
                  {errors.message.message}
                </p>
              )}

              {/* Status */}
              {status && (
                <p className="text-center text-sm text-muted-foreground">
                  {status}
                </p>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:shadow-lg hover:shadow-purple-500/40 text-white font-semibold rounded-xl"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
