import { useToast } from "@/components/ui/use-toast";
import { postQuery, postSubmit } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export const useQuerySubmit = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: postQuery,
  });
};
export const useFormSubmit = () => {
  return useMutation({
    mutationFn: postSubmit,   
    onError: (data) => {

      toast({
        variant: "destructive",
        title: "Error",
        message: `${data.message}`,
      });
    },
  });
};
